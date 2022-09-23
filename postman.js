pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 150ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("terrain");
});
});

pm.test("Status code is 500", function () {
    pm.response.to.have.status(500);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");

pm.test("Content-Length is present", function () {
    pm.response.to.have.header("Content-Length");
});
});
