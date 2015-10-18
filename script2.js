var Tester = (function () {
    function Tester(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.name = firstname + " " + middleinitial + " " + lastname;
    }
    return Tester;
})();
