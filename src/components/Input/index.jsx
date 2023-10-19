import { Container } from "./styles";

export function Input(icon, ...rest) {
    return (
        <Container>
            {icon && <icon size={20} />}
            <input {...rest} />
        </Container>
    )
}