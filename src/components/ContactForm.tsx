import styled from "styled-components"
import MainButton from "./MainButton";

const Panel = styled.div`
    display: grid;
    margin-inline: auto;
    max-width: ${props => props.theme.maxWidth};
    padding: 0 1rem;
    place-items: center;
    width: 100%;
`;

const Form = styled.form`
    background: ${props => props.theme.pallete.gray[700]};
    border-radius: 5px;
    color: ${props => props.theme.pallete.gray[100]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
    max-width: calc(${props => props.theme.maxWidth} / 2);
    padding: 2rem calc(1rem + 3px);
    width: 100%;
    & * {
        background: inherit;
        color: inherit;
    }
`;

const FormControl = styled.label`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid;
    padding: .5rem 0rem;
    &:focus {
        outline: none;
        border-color: ${props => props.theme.pallete.blue[700]};
    }
`;

const Actions = styled.div`
    display: flex;
    gap: 1rem;
`;

const Button = styled(MainButton)`
    background: ${props => props.theme.pallete.blue[700]};
    color: #aaa;
`;

export default function ContactForm() {
    return (
        <Panel>
            <Form>
                <FormControl>
                    <span>Name</span>
                    <Input type="text" name="name" />
                </FormControl>

                <FormControl>
                    <span>E-mail</span>
                    <Input type="email" name="email" />
                </FormControl>

                <FormControl>
                    <span>Phone</span>
                    <Input type="tel" name="phone" />
                </FormControl>

                <Actions>
                    <Button type="reset">Clear</Button>
                    <Button type="submit">Send</Button>
                </Actions>
            </Form>
        </Panel>
    )
}