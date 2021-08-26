// add mock db call
function Frnd() {
    return {
        name: 'Buddy',
        knowJS: true,
        favLib: 'Knockoutjs',
        isWierd: false
    }
}

// mapping the friend js to Observable for data-bind
function Friend(frnd) {
    var map = ko.mapping.fromJS(frnd);
    map.removeFriend = function () {
        obj.friends.remove(map);
    }
    return map;
}

var obj = {
    friends: ko.observableArray([new Friend(new Frnd())])
};
obj.addFriend = function () {
    obj.friends.push(new Friend(new Frnd()))
};

// **** IMPT ****
// bind the model obj to the view
ko.applyBindings(obj);
