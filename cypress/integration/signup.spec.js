import signup from '../pages/SignUpPage'
import signupFactory from '../factories/signupFactory'
import SignUpPage from '../pages/SignUpPage'


describe('Signup', () => {

    //beforeEach(function () {
    //    cy.fixture('deliver').then((d) => {
    //        this.deliver = d
    //    })
    //})


    it.skip('User should be a deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it.skip('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'
        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it.skip('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it('Required fields', function() {

        signup.go()
        signup.submit()
        SignUpPage.alertMessageShouldBe('É necessário informar o nome')
        SignUpPage.alertMessageShouldBe('É necessário informar o CPF')
        SignUpPage.alertMessageShouldBe('É necessário informar o email')
        SignUpPage.alertMessageShouldBe('É necessário informar o CEP')
        SignUpPage.alertMessageShouldBe('É necessário informar o número do endereço')
        SignUpPage.alertMessageShouldBe('Selecione o método de entrega')
        SignUpPage.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })

})