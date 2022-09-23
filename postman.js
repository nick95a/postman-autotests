/*
Проверяет наличие поля name в теле ответа.
*/
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");
});

/*
Проверяет успешность запроса, проверяя статус код (200 - успех).
*/
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

/*
Проверяет время ответа (с момента отправки запроса до получения ответа).
*/

pm.test("Response time is less than 150ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

/*
Проверяет успешность запроса, проверяя статус код (200 - успех).
*/
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

/*
Проверяет текст статуса запроса.
*/
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");

/*
Проверяет наличие поля terrain в теле ответа.
*/
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("terrain");
});
});

/*
Проверяет, если код ответа запроса равен 500 (Internal Server Error).
*/
pm.test("Status code is 500", function () {
    pm.response.to.have.status(500);
});

/*
Проверяет наличие поля name в теле ответа.
*/
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("name");

/*
Проверяет наличие заголовка Content-Length в заголовках ответа.
*/
pm.test("Content-Length is present", function () {
    pm.response.to.have.header("Content-Length");
});
});
