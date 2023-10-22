import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form } from "./styles";

export function Profile() {
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Input
                   placeholder='Nome'
                   type='Text'
                   icon={FiUser}
                />

                <Input
                    placeholder='E-mail'
                    type='Text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                />

                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title="Salvar" />
            </Form>
        </Container>
    )
}