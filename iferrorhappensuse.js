document.addEventListener('DOMContentLoaded', () => {
    // --- 1. NAVIGATION & CORE VARIABLES ---
    const sideNav = document.getElementById('side-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    const downloadDialog = document.getElementById('download-dialog');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const gameWindow = document.getElementById('game-window');
    const gameFrame = document.getElementById('game-frame');
    const titleDisplay = document.getElementById('now-playing-title');

    // Avatar Quick Shortcut Handler 
    const avatarBtn = document.getElementById('main-avatar-btn');
    if (avatarBtn) {
        avatarBtn.style.cursor = "pointer";
        avatarBtn.addEventListener('click', () => {
            tabContents.forEach(el => el.classList.remove('active'));
            navItems.forEach(el => el.classList.remove('active'));
            
            const targetProfile = document.getElementById('profile-tab');
            if (targetProfile) {
                targetProfile.style.display = 'block';
                targetProfile.classList.add('active');
            }
            updateProfileUI();
            console.log("[System] Profile opened via Avatar click!");
        });
    }

    // --- 2. GAME ENGINE (Unified Download + Window) ---
    window.openGame = (url, gameTitle = "Game") => {
        if (!downloadDialog) return;

        downloadDialog.showModal();
        let progress = 0;
        
        const interval = setInterval(() => {
            progress += Math.random() * 25;
            const displayProgress = Math.min(Math.round(progress), 100);
            
            if (progressBar) progressBar.style.width = displayProgress + '%';
            if (progressText) progressText.innerText = displayProgress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                downloadDialog.close();
                
                if (progressBar) progressBar.style.width = '0%';
                if (progressText) progressText.innerText = '0%';
                
                let currentSessionCount = parseInt(sessionStorage.getItem('airsky_session_played')) || 0;
                currentSessionCount++;
                sessionStorage.setItem('airsky_session_played', currentSessionCount);
                updateSessionPlayedUI();

                if (localStorage.getItem('hub_cloak') === 'true') {
                    const win = window.open();
                    if (win) {
                        win.document.body.style.margin = '0';
                        win.document.body.style.height = '100vh';
                        win.document.body.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>`;
                        win.document.title = "Google Drive";
                    }
                } else {
                    if (titleDisplay) titleDisplay.innerText = "Playing: " + gameTitle;
                    if (gameWindow) gameWindow.style.display = 'flex';
                    if (gameFrame) gameFrame.src = url;
                }
                addXP(15);
            }
        }, 300);
    };

    // Watch for image loading errors globally
    const profileAvatars = ['main-avatar-btn', 'display-avatar', 'profile-avatar'];
    profileAvatars.forEach(id => {
        const img = document.getElementById(id);
        if (img) {
            img.addEventListener('error', () => {
                img.src = 'system/error.png';
            });
        }
    });

    window.closeGameWindow = () => {
        if (gameWindow) gameWindow.style.display = 'none';
        if (gameFrame) gameFrame.src = ''; 
    };

    window.toggleFullScreen = () => {
        if (!gameFrame) return;
        if (gameFrame.requestFullscreen) gameFrame.requestFullscreen();
        else if (gameFrame.webkitRequestFullscreen) gameFrame.webkitRequestFullscreen();
    };

    // Global click listener to automatically close any open context menu dropdowns
    document.addEventListener('click', () => {
        document.querySelectorAll('.card-management-controls').forEach(menu => {
            menu.style.display = 'none';
        });
    });

    // --- AUTOMATIC GAME CARD ENGINE ---
    window.initGameCards = function() {
        document.querySelectorAll('.games-grid:not(#folder-games-grid) .game-card:not(.custom-folder-card)').forEach(card => {
            if (!card.getAttribute('data-game-id')) {
                const titleEl = card.querySelector('p, h3');
                const cleanId = titleEl ? titleEl.textContent.trim().replace(/\s+/g, '-').toLowerCase() : Math.random().toString(36).substr(2, 9);
                card.setAttribute('data-game-id', cleanId);
            }

            card.style.position = 'relative';

            const clickHandler = (e) => {
                if (e.target.closest('.card-management-controls')) return;

                const url = card.getAttribute('data-url');
                const titleElement = card.querySelector('p, h3');
                const gameTitle = titleElement ? titleElement.textContent : "Game";

                if (!url) return; 

                if (localStorage.getItem('hub_cloak') === 'true') {
                    const win = window.open();
                    if (win) {
                        win.document.body.style.margin = '0';
                        win.document.body.style.height = '100vh';
                        win.document.body.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; border:none;"></iframe>`;
                        win.document.title = "Google Drive";
                    }
                } else {
                    window.openGame(url, gameTitle);
                }
            };

            card.removeEventListener('click', card._currentHandler);
            card.addEventListener('click', clickHandler);
            card._currentHandler = clickHandler;

            let controls = card.querySelector('.card-management-controls');
            if (!controls) {
                controls = document.createElement('div');
                controls.className = 'card-management-controls';
                controls.style.cssText = 'position: absolute; display: none; background: var(--card); border: 1px solid var(--border); border-radius: 8px; padding: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 1000; flex-direction: column; gap: 5px;';
                
                card.appendChild(controls);

                controls.addEventListener('click', (e) => e.stopPropagation());
                controls.addEventListener('contextmenu', (e) => e.preventDefault());
            }

            card.oncontextmenu = function(e) {
                e.preventDefault();
                e.stopPropagation();

                document.querySelectorAll('.card-management-controls').forEach(menu => {
                    menu.style.display = 'none';
                });

                const folders = GameManagement.getFolders();
                let optionsHtml = '<option value="" disabled selected>📁 Add to...</option>';
                Object.keys(folders).forEach(f => {
                    optionsHtml += `<option value="${f}">${f}</option>`;
                });

                controls.innerHTML = `
                    <select class="folder-select-dropdown" style="background: var(--input-bg); color: var(--text); border: 1px solid var(--border); border-radius: 6px; padding: 4px; font-size: 0.75rem; cursor: pointer; outline: none; width: 110px;">
                        ${optionsHtml}
                    </select>
                    <button class="hide-card-btn" style="background: rgba(255,68,68,0.15); color: #ff4444; border: 1px solid rgba(255,68,68,0.3); border-radius: 6px; padding: 4px; font-size: 0.75rem; width: 100%; text-align: center; cursor: pointer;">✕ Hide Game</button>
                `;

                const selectDropdown = controls.querySelector('.folder-select-dropdown');
                selectDropdown.addEventListener('change', (optEvent) => {
                    const targetFolder = optEvent.target.value;
                    const gameId = card.getAttribute('data-game-id');
                    if (targetFolder && gameId) {
                        GameManagement.addGameToFolder(gameId, targetFolder);
                        controls.style.display = 'none';
                    }
                });

                const hideBtn = controls.querySelector('.hide-card-btn');
                hideBtn.addEventListener('click', () => {
                    const gameId = card.getAttribute('data-game-id');
                    if (gameId) {
                        GameManagement.hideGame(gameId);
                        controls.style.display = 'none';
                    }
                });

                const rect = card.getBoundingClientRect();
                const relativeX = e.clientX - rect.left;
                const relativeY = e.clientY - rect.top;

                controls.style.left = `${relativeX}px`;
                controls.style.top = `${relativeY}px`;
                controls.style.display = 'flex';
            };
        });
    };

    // --- GAME GRID RANDOMIZER ENGINE ---
    function shuffleGameCards() {
        const isShuffleDisabled = localStorage.getItem('disableShuffle') === 'true';
        if (isShuffleDisabled) return;

        const grids = document.querySelectorAll('.games-grid:not(#folder-games-grid)');
        grids.forEach(grid => {
            const cards = Array.from(grid.querySelectorAll('.game-card:not(.custom-folder-card)'));
            if (cards.length <= 1) return;

            for (let i = cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }
            cards.forEach(card => grid.appendChild(card));
        });
    }

    if (navToggle) {
        navToggle.onclick = () => sideNav.classList.toggle('collapsed');
    }

    navItems.forEach(btn => {
        btn.onclick = () => {
            navItems.forEach(el => el.classList.remove('active'));
            tabContents.forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            const target = document.getElementById(btn.getAttribute('data-target'));
            if (target) target.classList.add('active');
            
            shuffleGameCards();
        };
    });

    const clearDataBtn = document.getElementById('clear-data-btn');
    if (clearDataBtn) {
        clearDataBtn.onclick = () => {
            clearData();
        };
    }

    // --- 3. SEARCH UTILS ---
    const searchInput = document.getElementById('game-search');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            document.querySelectorAll('.games-grid:not(#folder-games-grid) .game-card').forEach(card => {
                const titleEl = card.querySelector('p, h3');
                if (titleEl) {
                    const title = titleEl.textContent.toLowerCase();
                    card.style.display = title.includes(filter) ? "flex" : "none";
                }
            });
        });
    }

    // --- 4. SETTINGS HANDLERS & PROFILE AVATARS ---
    const modal = document.getElementById('settings-modal');
    const avatarUpload = document.getElementById('avatar-upload');
    const importBtn = document.getElementById('import-btn');
    const avatarPreview = document.getElementById('profile-avatar');
    const avatarInput = document.getElementById('avatar-input');
    
    const cursorUpload = document.getElementById('cursor-upload');
    const cursorInput = document.getElementById('cursor-input');
    const resetCursorBtn = document.getElementById('reset-cursor');

    const settingsBtn = document.getElementById('settings-btn');
    const closeBtnTop = document.getElementById('close-modal-top');
    
    if (settingsBtn) {
        settingsBtn.onclick = () => {
            if (GameManagement && typeof GameManagement.renderHiddenGamesInSettings === 'function') {
                GameManagement.renderHiddenGamesInSettings();
            }
            if (modal && typeof modal.showModal === "function") modal.showModal();
        };
    }
    if (closeBtnTop) {
        closeBtnTop.onclick = () => {
            if (modal && typeof modal.close === "function") modal.close();
        };
    }

    // Prevent clicks on inputs inside the modal from triggering backdrop closing[cite: 9]
    if (avatarUpload) {
        avatarUpload.addEventListener('click', (e) => e.stopPropagation());
    }
    if (cursorUpload) {
        cursorUpload.addEventListener('click', (e) => e.stopPropagation());
    }

    // Updated backdrop click detector[cite: 9]
    if (modal) {
        modal.addEventListener('click', (e) => {
            // Only close if the background backdrop itself was directly clicked[cite: 9]
            if (e.target === modal && typeof modal.close === 'function') {
                modal.close();
            }
        });
    }

    if (importBtn) importBtn.onclick = () => avatarUpload.click();
    
    if (avatarUpload) {
        avatarUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (avatarInput) avatarInput.value = event.target.result;
                    if (avatarPreview) avatarPreview.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    if (cursorUpload) {
        cursorUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (cursorInput) cursorInput.value = event.target.result;
                    showToast("Custom cursor prepared! Save to apply.");
                };
                reader.readAsDataURL(file);
            }
        };
    }

    if (resetCursorBtn) {
        resetCursorBtn.onclick = () => {
            localStorage.removeItem('hub_cursor');
            if (cursorInput) cursorInput.value = '';
            const cursorFollower = document.getElementById('custom-cursor-follower');
            if (cursorFollower) {
                cursorFollower.style.display = 'none';
                cursorFollower.src = 'system/rounded.png';
            }
            document.body.classList.remove('hide-default-cursor');
            showToast("Cursor reset to system default.");
        };
    }

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('hub_theme', theme);
    };

    const applyLiquidGlass = (enabled) => {
        const elementsToGlass = document.querySelectorAll('.side-nav, .game-card, dialog, .chat-container, .browser-ui');
        elementsToGlass.forEach(el => {
            if (enabled) el.classList.add('liquid-glass-active');
            else el.classList.remove('liquid-glass-active');
        });
    };

    const applyHighContrast = (enabled) => {
        if (enabled) document.documentElement.setAttribute('data-contrast', 'high');
        else document.documentElement.removeAttribute('data-contrast');
    };

    // --- CARD GRADIENT BORDER PRESET HANDLER ---
    const cardBorderSelect = document.getElementById('card-border-style-select');
    const BORDER_PRESETS = {
        neon: 'linear-gradient(45deg, #ff007f, #7f00ff, #00f0ff, #ff007f)',
        cyberpunk: 'linear-gradient(45deg, #fffb00, #00f0ff, #ff007f, #fffb00)',
        fire: 'linear-gradient(45deg, #ff4500, #ff8c00, #ff2200, #ff4500)',
        solid: 'linear-gradient(0deg, var(--accent), var(--accent))'
    };

    window.applyBorderPreset = function(presetKey) {
        const gradientValue = BORDER_PRESETS[presetKey] || BORDER_PRESETS.neon;
        document.documentElement.style.setProperty('--border-gradient', gradientValue);
        localStorage.setItem('cardBorderPreset', presetKey);
    };

    if (cardBorderSelect) {
        cardBorderSelect.addEventListener('change', (e) => {
            applyBorderPreset(e.target.value);
        });
    }

    // --- BACKGROUND SELECTION HANDLER ---
    const bgSelect = document.getElementById('bg-style-select');
    if (bgSelect) {
        bgSelect.addEventListener('change', (e) => {
            BackgroundEngine.setEffect(e.target.value);
        });
    }

    // --- LOCALSTORAGE EXPORT & IMPORT ENGINE (.airsky) ---
    const exportDataBtn = document.getElementById('export-data-btn');
    const importDataBtn = document.getElementById('import-data-btn');
    const importDataInput = document.getElementById('import-airsky-input');

    window.exportAirSkyData = function() {
        const data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            data[key] = localStorage.getItem(key);
        }
        
        const jsonStr = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const fileName = `airsky_backup_${new Date().toISOString().slice(0, 10)}.airsky`;
        
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (typeof showToast === 'function') {
            showToast("Backup exported successfully as .airsky!");
        }
    };

    window.importAirSkyData = function(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.name.endsWith('.airsky')) {
            alert("Invalid file type! Please select a valid .airsky backup file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                if (typeof data === 'object' && data !== null) {
                    if (confirm("Importing this backup will overwrite your current settings and progress. Continue?")) {
                        Object.keys(data).forEach(key => {
                            localStorage.setItem(key, data[key]);
                        });
                        alert("Data imported successfully! AirSky will now reload.");
                        location.reload();
                    }
                } else {
                    alert("Corrupted or invalid .airsky file structure.");
                }
            } catch (err) {
                alert("Failed to parse the backup file.");
            }
        };
        reader.readAsText(file);
    };

    if (exportDataBtn) {
        exportDataBtn.onclick = () => window.exportAirSkyData();
    }

    if (importDataBtn && importDataInput) {
        importDataBtn.onclick = () => importDataInput.click();
        importDataInput.onchange = (e) => window.importAirSkyData(e);
    }

    // --- SAVE ALL SYSTEM CONFIGURATIONS ---
    const saveSettingsBtn = document.getElementById('save-settings');
    if (saveSettingsBtn) {
        saveSettingsBtn.onclick = () => {
            const nameEl = document.getElementById('username-input');
            const colorEl = document.getElementById('color-input');
            const themeEl = document.getElementById('theme-select');
            const cloakEl = document.getElementById('cloak-toggle');
            const glassEl = document.getElementById('glass-toggle');
            const contrastEl = document.getElementById('high-contrast-toggle');
            const sidePosEl = document.getElementById('sidebar-pos-select');
            const disableShuffleEl = document.getElementById('disable-shuffle-toggle');

            const name = nameEl ? nameEl.value : '';
            const color = colorEl ? colorEl.value : '#fffb00';
            const theme = themeEl ? themeEl.value : 'dark';
            const avatarData = avatarInput ? avatarInput.value : '';
            const cursorData = cursorInput ? cursorInput.value : '';
            const isCloak = cloakEl ? cloakEl.checked : false;
            const isGlass = glassEl ? glassEl.checked : false;
            const isHighContrast = contrastEl ? contrastEl.checked : false;
            const sidePos = sidePosEl ? sidePosEl.value : 'left';
            const isShuffleDisabled = disableShuffleEl ? disableShuffleEl.checked : false;

            localStorage.setItem('hub_side_pos', sidePos);
            document.body.setAttribute('data-side', sidePos);
            localStorage.setItem('hub_cloak', isCloak);
            localStorage.setItem('hub_glass', isGlass);
            localStorage.setItem('hub_high_contrast', isHighContrast);
            localStorage.setItem('disableShuffle', isShuffleDisabled);

            if (cardBorderSelect) {
                applyBorderPreset(cardBorderSelect.value);
            }

            if (bgSelect) {
                BackgroundEngine.setEffect(bgSelect.value);
            }

            if (name) {
                localStorage.setItem('hub_name', name);
                updateProfileUI();
            }
            if (avatarData && avatarPreview) {
                avatarPreview.src = avatarData;
                localStorage.setItem('hub_avatar', avatarData);
            }
            if (cursorData) {
                localStorage.setItem('hub_cursor', cursorData);
                initCustomCursor(cursorData);
            }

            applyTheme(theme);
            applyLiquidGlass(isGlass);
            applyHighContrast(isHighContrast);

            document.documentElement.style.setProperty('--accent', color);
            localStorage.setItem('hub_color', color);
            
            showToast("Settings Saved Successfully!");
            if (modal && typeof modal.close === "function") modal.close();
            
            location.reload();
        };
    }

    // --- 5. NOTIFICATION TOASTS ---
    window.showToast = (message) => {
        let container = document.getElementById('notification-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 8px;';
            document.body.appendChild(container);
        }
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.cssText = 'background: rgba(0,0,0,0.85); color: #fff; padding: 10px 18px; border-radius: 8px; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: opacity 0.3s ease;';
        toast.innerHTML = `<span>🔔</span> <span>${message}</span>`;
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // --- 6. OPTIMIZED WIDGET ENGINE ---
    function startWidgets() {
        setInterval(() => {
            const clockEl = document.getElementById('live-clock');
            if (clockEl) {
                clockEl.innerText = new Date().toLocaleTimeString([], { 
                    hour: '2-digit', minute: '2-digit', second: '2-digit' 
                });
            }
        }, 1000);

        if (navigator.getBattery) {
            navigator.getBattery().then(batt => {
                const levelEl = document.getElementById('battery-level');
                const iconEl = document.getElementById('battery-icon');

                const updateBattery = () => {
                    if (levelEl) levelEl.innerText = `${Math.round(batt.level * 100)}%`;
                    if (iconEl) { 
                        iconEl.innerHTML = batt.charging 
    ? '<img src="system/Images/icons/battery.gif" alt="Charging" width="25" height="25">' 
    : '<img src="system/Images/icons/battery.gif" alt="Battery" width="25" height="25">'; 

                    }
                };
                updateBattery();
                batt.onlevelchange = updateBattery;
                batt.onchargingchange = updateBattery;
            });
        } else {
            const levelEl = document.getElementById('battery-level');
            if (levelEl) levelEl.innerText = "N/A";
        }
    }

    // --- 7. APP INITIALIZE (LOAD) ---
    function load() {
        const sName = localStorage.getItem('hub_name');
        const sColor = localStorage.getItem('hub_color');
        const sTheme = localStorage.getItem('hub_theme') || 'dark';
        const sAvatar = localStorage.getItem('hub_avatar');
        const sCursor = localStorage.getItem('hub_cursor');
        const sGlass = localStorage.getItem('hub_glass') === 'true';
        const sHighContrast = localStorage.getItem('hub_high_contrast') === 'true';
        const sCloak = localStorage.getItem('hub_cloak') === 'true';
        const sSidePos = localStorage.getItem('hub_side_pos') || 'left';
        const sShuffleDisabled = localStorage.getItem('disableShuffle') === 'true';
        const sBorderPreset = localStorage.getItem('cardBorderPreset') || 'neon';
        const sBgStyle = localStorage.getItem('hub_bg_style') || 'none';
        
        document.body.setAttribute('data-side', sSidePos);
        const sbPosSelect = document.getElementById('sidebar-pos-select');
        if (sbPosSelect) sbPosSelect.value = sSidePos;

        if (sName) {
            const welcomeText = document.getElementById('welcome-text');
            if (welcomeText) welcomeText.innerText = `Welcome, ${sName}!`;
            const userIn = document.getElementById('username-input');
            if (userIn) userIn.value = sName;
        }
        if (sColor) {
            document.documentElement.style.setProperty('--accent', sColor);
            const colorIn = document.getElementById('color-input');
            if (colorIn) colorIn.value = sColor;
        }
        if (sAvatar && avatarPreview) {
            avatarPreview.src = sAvatar;
            if (avatarInput) avatarInput.value = sAvatar;
        }
        
        const cloakTog = document.getElementById('cloak-toggle');
        const glassTog = document.getElementById('glass-toggle');
        const contrastTog = document.getElementById('high-contrast-toggle');
        const shuffleTog = document.getElementById('disable-shuffle-toggle');
        
        if (cloakTog) cloakTog.checked = sCloak;
        if (glassTog) glassTog.checked = sGlass;
        if (contrastTog) contrastTog.checked = sHighContrast;
        if (shuffleTog) shuffleTog.checked = sShuffleDisabled;

        applyTheme(sTheme);
        const themeSelect = document.getElementById('theme-select');
        if (themeSelect) themeSelect.value = sTheme;

        applyLiquidGlass(sGlass);
        applyHighContrast(sHighContrast);
        
        applyBorderPreset(sBorderPreset);
        if (cardBorderSelect) cardBorderSelect.value = sBorderPreset;

        BackgroundEngine.init();
        BackgroundEngine.setEffect(sBgStyle);
        if (bgSelect) bgSelect.value = sBgStyle;

        if (sCursor) {
            if (cursorInput) cursorInput.value = sCursor;
            initCustomCursor(sCursor);
        }

        startWidgets();
        window.initGameCards();
        shuffleGameCards();

        updateXPDisplay();
        updateProfileUI();
        updateStoreUI();
        updateGameLibraryCount();
        updateSessionPlayedUI();
        GameManagement.renderFoldersInGrid();

        const storeNavBtn = document.querySelector('[data-target="cursor-store-tab"]');
        if (storeNavBtn) storeNavBtn.addEventListener('click', updateStoreUI);
    }

    if (typeof updateGameLibraryCount === 'function') updateGameLibraryCount();
    if (typeof updateSessionPlayedUI === 'function') updateSessionPlayedUI();

    load();
});

// ==========================================
// DYNAMIC ANIMATED BACKGROUND ENGINE
// ==========================================
window.BackgroundEngine = {
    canvas: null,
    ctx: null,
    animationId: null,
    currentEffect: 'none',
    particles: [],

    init() {
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'bg-animation-canvas';
            this.canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; pointer-events: none;';
            document.body.prepend(this.canvas);
            this.ctx = this.canvas.getContext('2d');

            window.addEventListener('resize', () => {
                if (this.canvas) {
                    this.canvas.width = window.innerWidth;
                    this.canvas.height = window.innerHeight;
                    this.resetEffect();
                }
            });
        }
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    getAccentColor() {
        return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00f0ff';
    },

    setEffect(effect) {
        this.currentEffect = effect;
        localStorage.setItem('hub_bg_style', effect);
        this.resetEffect();
    },

    resetEffect() {
        if (this.animationId) cancelAnimationFrame(this.animationId);
        if (!this.ctx) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles = [];

        if (this.currentEffect === 'none') return;

        if (this.currentEffect === 'matrix') {
            const columns = Math.floor(this.canvas.width / 20);
            for (let i = 0; i < columns; i++) {
                this.particles.push({ x: i * 20, y: Math.random() * -this.canvas.height });
            }
            this.drawMatrix();
        } else if (this.currentEffect === 'starfield') {
            for (let i = 0; i < 150; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speed: Math.random() * 1.5 + 0.2
                });
            }
            this.drawStarfield();
        } else if (this.currentEffect === 'particles') {
            for (let i = 0; i < 60; i++) {
                this.particles.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: (Math.random() - 0.5) * 1.2,
                    radius: Math.random() * 3 + 1
                });
            }
            this.drawParticles();
        } else if (this.currentEffect === 'hexgrid') {
            this.drawHexGrid();
        }
    },

    // --- EFFECT 1: MATRIX RAIN ---
    drawMatrix() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = this.getAccentColor();
        this.ctx.font = '15px monospace';

        const chars = '0123456789ABCDEFABCDEFGHIJKLMNOPQRSTUVWXYZ';

        this.particles.forEach(p => {
            const char = chars[Math.floor(Math.random() * chars.length)];
            this.ctx.fillText(char, p.x, p.y);

            if (p.y > this.canvas.height && Math.random() > 0.975) {
                p.y = 0;
            } else {
                p.y += 20;
            }
        });

        this.animationId = requestAnimationFrame(() => this.drawMatrix());
    },

    // --- EFFECT 2: ACCENT STARFIELD ---
    drawStarfield() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.getAccentColor();

        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            p.y += p.speed;
            if (p.y > this.canvas.height) {
                p.y = 0;
                p.x = Math.random() * this.canvas.width;
            }
        });

        this.animationId = requestAnimationFrame(() => this.drawStarfield());
    },

    // --- EFFECT 3: CONNECTING PARTICLE WEB ---
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const accent = this.getAccentColor();

        for (let i = 0; i < this.particles.length; i++) {
            let p1 = this.particles[i];
            p1.x += p1.vx;
            p1.y += p1.vy;

            if (p1.x < 0 || p1.x > this.canvas.width) p1.vx *= -1;
            if (p1.y < 0 || p1.y > this.canvas.height) p1.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = accent;
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                let p2 = this.particles[j];
                let dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
                if (dist < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = accent;
                    this.ctx.globalAlpha = 1 - dist / 120;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1.0;
                }
            }
        }

        this.animationId = requestAnimationFrame(() => this.drawParticles());
    },

    // --- EFFECT 4: HEXAGONAL GRID ---
    drawHexGrid() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const hexRadius = 30;
        const accent = this.getAccentColor();

        this.ctx.strokeStyle = accent;
        this.ctx.globalAlpha = 0.15;
        this.ctx.lineWidth = 1;

        const drawHex = (x, y) => {
            this.ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = x + hexRadius * Math.cos(angle);
                const hy = y + hexRadius * Math.sin(angle);
                if (i === 0) this.ctx.moveTo(hx, hy);
                else this.ctx.lineTo(hx, hy);
            }
            this.ctx.closePath();
            this.ctx.stroke();
        };

        const xDiff = hexRadius * 3;
        const yDiff = hexRadius * Math.sqrt(3) / 2;

        for (let y = 0; y < this.canvas.height + hexRadius; y += yDiff) {
            let row = 0;
            for (let x = 0; x < this.canvas.width + hexRadius; x += xDiff) {
                drawHex(x + (row % 2 === 1 ? hexRadius * 1.5 : 0), y);
            }
            row++;
        }
        this.ctx.globalAlpha = 1.0;
    }
};

// ==========================================
// 8. GLOBAL FOLDER & GAME MANAGEMENT
// ==========================================
window.GameManagement = {
    STORAGE_KEY: 'airsky_hidden_games',

    getHiddenGames() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    },

    saveHiddenGames(hiddenGames) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(hiddenGames));
    },

    getFolders() {
        return JSON.parse(localStorage.getItem('airsky_folders')) || {};
    },

    hideGame(gameId) {
        let hidden = this.getHiddenGames();
        if (!hidden.includes(gameId)) {
            hidden.push(gameId);
            this.saveHiddenGames(hidden);
            
            this.applyHiddenState();
            
            if (typeof updateGameLibraryCount === 'function') updateGameLibraryCount();
            if (typeof showToast === 'function') showToast("Game hidden. You can restore it from settings.");
        }
    },

    restoreGame(gameId) {
        let hidden = this.getHiddenGames();
        hidden = hidden.filter(id => id !== gameId);
        this.saveHiddenGames(hidden);
        
        this.applyHiddenState();
        
        if (typeof updateGameLibraryCount === 'function') updateGameLibraryCount();
    },

    applyHiddenState() {
        const hiddenGames = this.getHiddenGames();
        const allCards = document.querySelectorAll('.game-card[data-game-id]');

        allCards.forEach(card => {
            const gameId = card.getAttribute('data-game-id');
            if (hiddenGames.includes(gameId)) {
                card.style.display = 'none';
            } else {
                card.style.display = '';
            }
        });
    },

    renderHiddenGamesInSettings() {
        const listContainer = document.getElementById('hidden-games-list');
        if (!listContainer) return;

        const hiddenGames = this.getHiddenGames();
        if (hiddenGames.length === 0) {
            listContainer.innerHTML = '<p style="font-size: 0.8rem; color: var(--text-soft, #888); margin: 0;">No hidden games found. <p style="color: var(--accent);">Tip!: Right-Click on a game to find the hide game option.</p></p>';
            return;
        }

        listContainer.innerHTML = '';
        hiddenGames.forEach(gameId => {
            const card = document.querySelector(`.game-card[data-game-id="${gameId}"]`);
            let title = gameId;
            if (card) {
                const titleEl = card.querySelector('p, h3, .game-title');
                if (titleEl && titleEl.textContent.trim()) {
                    title = titleEl.textContent.trim();
                }
            }

            const itemRow = document.createElement('div');
            itemRow.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 6px 10px; background: var(--card, #1e1e1e); border: 1px solid var(--border, #333); border-radius: 6px; margin-bottom: 6px;';
            itemRow.innerHTML = `
                <span style="font-size: 0.85rem; color: var(--text, #fff);">${title}</span>
                <button class="restore-btn" style="background: var(--accent, #007acc); color: #fff; font-weight: bold; border: none; border-radius: 4px; padding: 4px 10px; font-size: 0.75rem; cursor: pointer;">Unhide</button>
            `;

            itemRow.querySelector('.restore-btn').addEventListener('click', () => {
                this.restoreGame(gameId);
                this.renderHiddenGamesInSettings();
                if (typeof showToast === 'function') showToast(`Restored "${title}" to library!`);
            });

            listContainer.appendChild(itemRow);
        });
    },

    createFolder(folderName) {
        if (!folderName || folderName.trim() === "") return;
        folderName = folderName.trim();
        let folders = this.getFolders();
        
        if (folders[folderName]) {
            if (typeof showToast === 'function') showToast("A folder with that name already exists!");
            return;
        }

        folders[folderName] = [];
        localStorage.setItem('airsky_folders', JSON.stringify(folders));
        
        this.renderFoldersInGrid();
        if (window.initGameCards) window.initGameCards();
        if (typeof showToast === 'function') showToast(`Folder "${folderName}" created!`);
    },

    removeFolder(folderName) {
        let folders = this.getFolders();
        if (folders[folderName]) {
            delete folders[folderName];
            localStorage.setItem('airsky_folders', JSON.stringify(folders));
            
            const dialog = document.getElementById('folder-view-dialog');
            if (dialog && typeof dialog.close === 'function') {
                dialog.close();
            }

            this.renderFoldersInGrid();
            if (window.initGameCards) window.initGameCards();
            if (typeof showToast === 'function') showToast(`Folder "${folderName}" deleted!`);
        }
    },

    addGameToFolder(gameId, folderName) {
        let folders = this.getFolders();
        if (folders[folderName] && !folders[folderName].includes(gameId)) {
            Object.keys(folders).forEach(f => {
                folders[f] = folders[f].filter(id => id !== gameId);
            });

            folders[folderName].push(gameId);
            localStorage.setItem('airsky_folders', JSON.stringify(folders));
            
            this.renderFoldersInGrid();
            if (typeof showToast === 'function') showToast(`Added to folder: ${folderName}!`);
        }
    },

    removeGameFromFolder(gameId, folderName) {
        let folders = this.getFolders();
        if (folders[folderName]) {
            folders[folderName] = folders[folderName].filter(id => id !== gameId);
            localStorage.setItem('airsky_folders', JSON.stringify(folders));
            
            this.openFolderModal(folderName);
            this.renderFoldersInGrid();
            if (typeof showToast === 'function') showToast("Game removed from folder!");
        }
    },

    renderFoldersInGrid() {
        const grid = document.querySelector('#games-section .games-grid:not(#recent-grid)');
        if (!grid) return;

        document.querySelectorAll('.custom-folder-card').forEach(el => el.remove());

        const folders = this.getFolders();
        const hiddenGames = this.getHiddenGames();

        grid.querySelectorAll('.game-card:not(.custom-folder-card)').forEach(card => {
            const gameId = card.getAttribute('data-game-id');
            let shouldHide = hiddenGames.includes(gameId);
            
            for (let folder in folders) {
                if (folders[folder].includes(gameId)) {
                    shouldHide = true;
                }
            }
            card.style.display = shouldHide ? 'none' : 'flex';
        });

        Object.keys(folders).forEach(folderName => {
            const folderCard = document.createElement('div');
            folderCard.className = 'game-card folder-card custom-folder-card';
            folderCard.style.cssText = 'cursor: pointer; position: relative;';
            folderCard.innerHTML = `
                <div class="folder-icon" style="font-size: 3rem; color: var(--accent);">📁</div>
                <h3>${folderName}</h3>
                <p style="font-size: 0.8rem; color: var(--text-soft); margin-bottom: 8px;">${folders[folderName].length} Games</p>
                <button class="tool-btn open-folder-btn" style="width:100%; padding:6px; background: var(--accent); color: #000; font-weight: bold; border-radius: 8px; cursor: pointer;">Open Folder</button>
            `;
            
            folderCard.addEventListener('click', () => {
                this.openFolderModal(folderName);
            });

            grid.insertBefore(folderCard, grid.firstChild);
        });

        if (typeof updateGameLibraryCount === 'function') updateGameLibraryCount();
    },

    openFolderModal(folderName) {
        const dialog = document.getElementById('folder-view-dialog') || this.createFolderModalMarkup();
        const title = dialog.querySelector('#folder-modal-title');
        const grid = dialog.querySelector('#folder-games-grid');
        const deleteFolderBtn = dialog.querySelector('#delete-folder-btn');
        
        if (title) title.innerText = folderName;

        if (deleteFolderBtn) {
            const newDeleteBtn = deleteFolderBtn.cloneNode(true);
            deleteFolderBtn.parentNode.replaceChild(newDeleteBtn, deleteFolderBtn);
            
            newDeleteBtn.addEventListener('click', () => {
                if (confirm(`Are you sure you want to delete the folder "${folderName}"? Games inside will be moved back to the main library.`)) {
                    this.removeFolder(folderName);
                }
            });
        }

        if (grid) {
            grid.innerHTML = "";
            const folders = this.getFolders();
            const gameIds = folders[folderName] || [];

            if (gameIds.length === 0) {
                grid.innerHTML = `<p style="grid-column: 1/-1; color: var(--text-soft); padding: 20px;">This folder is empty. Right-click normal games to add them here!</p>`;
            }

            gameIds.forEach(id => {
                const sourceCard = document.querySelector(`.games-grid .game-card[data-game-id="${id}"]`);
                let gameTitle = id;
                let imgSrc = 'system/Images/default-avatar.png';
                let dataUrl = '';

                if (sourceCard) {
                    const tEl = sourceCard.querySelector('p');
                    const imgEl = sourceCard.querySelector('img');
                    if (tEl) gameTitle = tEl.textContent;
                    if (imgEl) imgSrc = imgEl.src;
                    dataUrl = sourceCard.getAttribute('data-url') || '';
                }

                const subCard = document.createElement('div');
                subCard.className = 'game-card';
                subCard.style.cssText = 'position: relative; cursor: pointer; padding: 15px; display: flex; flex-direction: column; align-items: center;';
                subCard.innerHTML = `
                    <img src="${imgSrc}" style="width: 80px; height: 80px; border-radius: 15px; object-fit: cover; margin-bottom: 8px;">
                    <p style="font-size: 0.9rem; margin-bottom: 8px;">${gameTitle}</p>
                    <button class="remove-from-folder-btn" style="background: rgba(255,68,68,0.2); color: #ff4444; font-size: 0.75rem; border-radius: 6px; padding: 4px 8px; width: 100%;">Remove</button>
                `;

                subCard.addEventListener('click', (e) => {
                    if (e.target.tagName === 'BUTTON') return;
                    if (dataUrl && window.openGame) {
                        dialog.close();
                        window.openGame(dataUrl, gameTitle);
                    }
                });

                subCard.querySelector('.remove-from-folder-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.removeGameFromFolder(id, folderName);
                });

                grid.appendChild(subCard);
            });
        }
        if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    },

    createFolderModalMarkup() {
        const dialog = document.createElement('dialog');
        dialog.id = 'folder-view-dialog';
        dialog.style.cssText = 'width: 90%; max-width: 600px; background: var(--card); border: 1px solid var(--border); border-radius: 20px; color: var(--text); padding: 0;';
        dialog.innerHTML = `
            <div class="modal-header" style="padding: 20px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <h2 id="folder-modal-title" style="margin: 0;">Folder</h2>
                    <button id="delete-folder-btn" style="background: rgba(255,68,68,0.15); color: #ff4444; border: 1px solid rgba(255,68,68,0.3); border-radius: 6px; padding: 5px 10px; font-size: 0.75rem; font-weight: bold; cursor: pointer;">🗑️ Delete Folder</button>
                </div>
                <button onclick="this.closest('dialog').close()" style="background: transparent; border: none; color: var(--text-soft); font-size: 1.8rem; cursor: pointer;">×</button>
            </div>
            <div class="modal-content" style="padding: 20px; max-height: 60vh; overflow-y: auto;">
                <div class="games-grid" id="folder-games-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 15px;"></div>
            </div>
        `;
        document.body.appendChild(dialog);
        return dialog;
    }
};

// ==========================================
// CORE FEATURE: XP & LEVELING SYSTEM
// ==========================================
function addXP(amount) {
    let currentXP = parseInt(localStorage.getItem('airsky_xp')) || 0;
    currentXP += amount;
    localStorage.setItem('airsky_xp', currentXP);
    
    showXPPop(amount); 
    updateXPDisplay();
    updateStoreUI();
    updateProfileUI();
}

function updateXPDisplay() {
    const totalXP = parseInt(localStorage.getItem('airsky_xp')) || 0;
    const levelElement = document.getElementById('user-level');
    const barFill = document.getElementById('xp-bar-fill');
    const xpText = document.getElementById('current-xp');

    const level = Math.floor(totalXP / 100) + 1;
    const progress = totalXP % 100;

    if (levelElement) levelElement.innerText = level;
    if (xpText) xpText.innerText = progress;
    if (barFill) barFill.style.width = progress + "%";
}

function showXPPop(amount) {
    if (typeof window.showToast === "function") {
        window.showToast(`Earned +${amount} XP!`);
    }
}

// --- PROFILE PAGE UI TRACKS ---
function updateProfileUI() {
    const savedName = localStorage.getItem('hub_name') || "Player 1";
    const currentXP = parseInt(localStorage.getItem('airsky_xp')) || 0;
    const level = Math.floor(currentXP / 100) + 1;
    
    const dispName = document.getElementById('display-name');
    const navUser = document.getElementById('nav-username');
    const profLvl = document.getElementById('profile-lvl');
    const profXp = document.getElementById('profile-xp');
    const welcomeText = document.getElementById('welcome-text');

    if (dispName) dispName.innerText = savedName;
    if (navUser) navUser.innerText = savedName;
    if (welcomeText) welcomeText.innerText = `Welcome, ${savedName}!`;
    if (profLvl) profLvl.innerText = level;
    if (profXp) profXp.innerText = currentXP;
}

function updateProfileName() {
    const nameInput = document.getElementById('username-input');
    if (!nameInput) return;
    const newName = nameInput.value.trim();
    if (newName !== "") {
        localStorage.setItem('hub_name', newName);
        updateProfileUI();
        alert("Identity Updated!");
    }
}

// ==========================================
// CORE CUSTOM CURSOR RUNTIME ENGINE
// ==========================================
function initCustomCursor(cursorImgPath) {
    const cursorFollower = document.getElementById('custom-cursor-follower');
    if (!cursorImgPath || !cursorFollower) return;
    
    cursorFollower.src = cursorImgPath;
    cursorFollower.style.display = 'block';
    document.body.classList.add('hide-default-cursor');

    window.removeEventListener('mousemove', handleCursorMovement);
    window.addEventListener('mousemove', handleCursorMovement);
}

function handleCursorMovement(e) {
    const cursorFollower = document.getElementById('custom-cursor-follower');
    if (cursorFollower) {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }
}

function updateStoreUI() {
    const currentXP = parseInt(localStorage.getItem('airsky_xp')) || 0;
    const balanceDisplay = document.getElementById('store-xp-balance');
    if (balanceDisplay) balanceDisplay.innerText = currentXP;

    const unlockedCursors = JSON.parse(localStorage.getItem('unlocked_cursors')) || [];
    const activeCursor = localStorage.getItem('hub_cursor');

    const storeItems = [
        { id: 'rounded-cursor', path: 'system/images/cursor/rounded_cursor.png' },
        { id: 'matrix-code', path: 'system/images/cursor/RGB.png' },
        { id: 'sea-rounded-cursor', path: 'system/images/cursor/sea_rounded_cursor.png' },
        { id: 'purple-rounded-cursor', path: 'system/images/cursor/purple_rounded_cursor.png' },
        { id: 'green-rounded-cursor', path: 'system/images/cursor/green_rounded_cursor.png' },
        { id: 'red-rounded-cursor', path: 'system/images/cursor/red_rounded_cursor.png' },
        { id: 'orange-rounded-cursor', path: 'system/images/cursor/orange_rounded_cursor.png' },
        { id: 'rgb-rounded-cursor', path: 'system/images/cursor/rgb_rounded_cursor.png' },
        { id: 'designone-cursor', path: 'system/images/cursor/design_cursor3.png' },
        { id: 'designtwo-cursor', path: 'system/images/cursor/design_cursor2.png' },
        { id: 'designthree-cursor', path: 'system/images/cursor/design_cursor1.png' }
    ];

    storeItems.forEach(item => {
        const itemCard = document.getElementById(`item-${item.id}`);
        if (itemCard) {
            const button = itemCard.querySelector('.buy-btn');
            if (button) {
                if (unlockedCursors.includes(item.id)) {
                    if (activeCursor && activeCursor === item.path) {
                        button.innerText = "Equipped";
                        button.className = "buy-btn unlocked";
                        button.style.border = "1px solid var(--accent)";
                    } else {
                        button.innerText = "Equip";
                        button.className = "buy-btn unlocked";
                        button.style.border = "none";
                    }
                } else {
                    button.innerText = "Purchase";
                    button.className = "buy-btn";
                    button.style.border = "none";
                }
            }
        }
    });
}

function buyCursor(id, cost, assetPath) {
    let unlockedCursors = JSON.parse(localStorage.getItem('unlocked_cursors')) || [];
    
    if (unlockedCursors.includes(id)) {
        localStorage.setItem('hub_cursor', assetPath);
        initCustomCursor(assetPath);
        updateStoreUI();
        if (typeof window.showToast === "function") window.showToast("Cursor equipped!");
        return;
    }

    let currentXP = parseInt(localStorage.getItem('airsky_xp')) || 0;
    if (currentXP >= cost) {
        currentXP -= cost;
        localStorage.setItem('airsky_xp', currentXP);
        
        unlockedCursors.push(id);
        localStorage.setItem('unlocked_cursors', JSON.stringify(unlockedCursors));
        localStorage.setItem('hub_cursor', assetPath);

        initCustomCursor(assetPath);
        
        updateXPDisplay();
        updateProfileUI();
        updateStoreUI();
        
        if (typeof window.showToast === "function") {
            window.showToast("Cursor unlocked and equipped!");
        }
    } else {
        if (typeof window.showToast === "function") {
            window.showToast("Insufficient XP balance available!");
        }
    }
}

function updateGameLibraryCount() {
    const totalCards = document.querySelectorAll('.games-grid:not(#folder-games-grid) .game-card').length;
    const counterElement = document.getElementById('total-games-count');
    if (counterElement) counterElement.innerText = totalCards;
}

function updateSessionPlayedUI() {
    const sessionCount = sessionStorage.getItem('airsky_session_played') || 0;
    const sessionElement = document.getElementById('session-played-count');
    if (sessionElement) sessionElement.innerText = sessionCount;
}

function clearData() {
    if (confirm("Warning: This will delete all progress on other games. Make sure you backup your files before doing this! THIS IS TOO RISKY TO LOSE YOUR PROGRESS. ARE YOU SURE YOU WANT TO PROCESS?")) {
        localStorage.clear();
        alert("GAMES FIXED! YOU WILL BE REDIRECTED TO THE RESTARTING PAGE.");
        setTimeout(function() {
            window.location.href = "system/restarting.html";
        }, 1000);
    }
}

// --- RANDOM SPAWN ENGINE FEATURE ---
function randomizeGameElement(elementId) {
    if (localStorage.getItem('disableShuffle') === 'true') return;

    const gameElem = document.getElementById(elementId);
    if (!gameElem) return;
    gameElem.classList.add('is-randomized');

    gameElem.style.position = 'absolute';

    const minSize = 150;
    const maxSize = 350;
    const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

    gameElem.style.width = `${randomSize}px`;
    gameElem.style.height = `${randomSize}px`;

    const containerWidth = gameElem.parentElement ? gameElem.parentElement.clientWidth : window.innerWidth;
    const containerHeight = gameElem.parentElement ? gameElem.parentElement.clientHeight : window.innerHeight;

    const maxLeft = containerWidth - randomSize;
    const maxTop = containerHeight - randomSize;

    const randomLeft = Math.max(0, Math.floor(Math.random() * maxLeft));
    const randomTop = Math.max(0, Math.floor(Math.random() * maxTop));

    gameElem.style.left = `${randomLeft}px`;
    gameElem.style.top = `${randomTop}px`;
}