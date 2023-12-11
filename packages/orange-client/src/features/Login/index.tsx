import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import './index.scss'
import duck from './duck'
import {connect} from 'react-redux'
import {authPropsSelector} from '../../selectors'
import Toast from '../../components/Toast'
import {useTranslation} from 'react-i18next'

const LoginPage = (props: any) => {
  const {t} = useTranslation()
  const {common, auth, setEmail, setPassword, login} = props
  const {email, password} = auth
  const {messages} = common

  const handleSubmit = (e: any) => {
    e.preventDefault()
    login()
  }

  return (
    <>
      <Container fluid className="login-container">
        <Row>
          <Col md={{span: 8, offset: 2}}>
            <div className="login-form">
              <h2>Orange Login</h2>
              <p>Please enter your email and password!</p>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(event) => {
                      setEmail(event.currentTarget.value)
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(event) => {
                      setPassword(event.currentTarget.value)
                    }}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {t('LOGIN_PAGE.BUTTON.LOGIN')}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Toast messages={messages} />
    </>
  )
}

const enhance = connect(authPropsSelector, {...duck.actions})
export default enhance(LoginPage)
