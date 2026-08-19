function Body() {
console.log("Body");
};

Body.prototype = {


};

Body.Create = function(sprite, parent, bodyType, material, geomType, geomInfo, loadFromJson, physicsKey, scale, bullet, fixedRotation,
    isSensor, allowSleep, linearDamping, angularDamping)

{
    scale = (scale) ? scale : 1;
    loadFromJson = (loadFromJson) ? loadFromJson : false;
    bullet = (bullet) ? bullet : false;
    fixedRotation = (fixedRotation) ? fixedRotation : false;
    isSensor = (isSensor) ? isSensor : false;
    allowSleep = (allowSleep !== true) ? allowSleep : true;
    linearDamping = (linearDamping) ? linearDamping : 0.0;
    angularDamping = (angularDamping) ? angularDamping : 0.0;
    gameGlobal.physics.box2d.enable(sprite);

    if (bodyType == BodyType.KINEMATIC) {
        sprite.body.kinematic = true;
    }

    if (bodyType == BodyType.STATIC) {
        sprite.body.static = true;
    }

    //load shape from json
    if (loadFromJson) {
        sprite.body.clearFixtures();
        sprite.body.loadPolygon('physicsData', physicsKey, sprite, scale);
    }

    switch (geomType) {
        case GeomType.POLYGON:
            break;
        case GeomType.CIRCLE:
            sprite.body.setCircle(geomInfo[0]);
            break;
        default:
            break;
    }

    if (!loadFromJson) {
        sprite.body.fixedRotation = fixedRotation;
        if (bodyType == BodyType.DYNAMIC) {
            sprite.body.mass = material[Materials.DENSITY];
        } else {
            sprite.body.mass = 0;
        }

    } else {

        if (bodyType == BodyType.DYNAMIC) {
            sprite.body.density = material[Materials.DENSITY];
        } else {
            sprite.body.density = 0;
        }
    }
    sprite.body.bullet = bullet;
    sprite.body.allowSleep = allowSleep;
    sprite.body.linearDamping = linearDamping;
    sprite.body.angularDamping = angularDamping;
    sprite.body.sensor = isSensor;
    //set the material type
    sprite.body.userData = material[0];
    //ToDo: temp
    sprite.body.setCollisionCategory(2);

    sprite.body.friction = material[Materials.FRICTION];
    sprite.body.restitution = material[Materials.RESTITUTION];
    //		body.filter.groupIndex = groupIndex;

};

Body.Destroy = function(body) {
    if (body) {
        gameGlobal.physics.box2d.world.DestroyBody(body);

    }
};

Body.GetMaterial = function(body) {
    var material;
    if (body) {
        material = body.userData;
    }
    return material;
};

Body.GetBodyAtPoint = function(point, onlyDynamic, onlyOne) {
    onlyDynamic = (onlyDynamic) ? onlyDynamic : false;
    onlyOne = (onlyOne) ? onlyOne : false;
    var currentBodyArr = gameGlobal.physics.box2d.getBodiesAtPoint(point.x, point.y, onlyOne, onlyDynamic);
    return currentBodyArr;
};


Body.GetBodyAtPointXY = function(gameContext, x, y, onlyDynamic, onlyOne) {
    onlyDynamic = (onlyDynamic) ? onlyDynamic : false;
    onlyOne = (onlyOne) ? onlyOne : false;
    var currentBodyArr = gameContext.physics.box2d.getBodiesAtPoint(x, y, onlyOne, onlyDynamic);
    return currentBodyArr;
};

Body.GetTouchingBody = function(body) {

    var contactEdgeBody = body.data.GetContactList();
    var cBody;
    console.log(' Body: contact edge body = ' + contactEdgeBody);
    if (contactEdgeBody) {
        cBody = contactEdgeBody.other;
        console.log(' Body cbody = ' + cBody.sprite.key);
    }
    return cBody;
};

Body.ScalePolygon = function(body) {

};