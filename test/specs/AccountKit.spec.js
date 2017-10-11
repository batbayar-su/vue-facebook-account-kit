import AccountKit from 'src/AccountKit.vue'
import { createVM } from '../helpers/utils.js'
import chai from 'chai'

describe('AccountKit', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
    <AccountKit ref="accountKit"
      appId='1'
      version='v1.0'
      state='csrf'
      :onResponse='${resp => console.log(resp)}'>      
    </AccountKit>
    `, { components: { AccountKit }})
    vm.$refs.accountKit.$el.querySelector('p').textContent.should.eql('You\'re not supposed to render this component empty.')
  })

  it('should render correct contents 2', function () {
    const vm = createVM(this, `
    <AccountKit ref="accountKit"
      appId='1'
      version='v1.0'
      state='csrf'
      :onResponse='${resp => console.log(resp)}'>      
      Hello
    </AccountKit>
    `, { components: { AccountKit }})
    vm.$refs.accountKit.$el.textContent.trim().should.eql('Hello')
  })

  it('should instantiate account kit', function (done) {
    createVM(this, `
    <AccountKit ref="accountKit"
      appId='1'
      version='v1.0'
      state='csrf'
      :onResponse='${resp => console.log(resp)}'>      
    </AccountKit>
    `, { components: { AccountKit }})

    setTimeout(() => {
      var should = chai.should()
      should.exist(window.AccountKit)
      should.exist(window.AccountKit_OnInteractive)
      done()
    }, 1000)
  })
})
