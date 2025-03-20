describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click();  // Войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Успешно
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

     })

     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio77'); // Неверный пароль
        cy.get('#loginButton').click();  // Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // НЕуспешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

    })

    
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov1.ru'); // Ввели Неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Верный пароль
        cy.get('#loginButton').click();  // Войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // НЕуспешно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

 })

 
 it('Логин без @', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('germandolnikov1.ru'); // Ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); // Верный пароль
    cy.get('#loginButton').click();  // Войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Сообщение о проблеме валидации
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})

it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikov1.ru'); 
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('Приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели Неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // Верный пароль
    cy.get('#loginButton').click();  // Войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Успешная авто
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя

})

})