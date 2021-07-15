import styled, { ThemeProvider } from "styled-components"
import Button from './element/Button'
export const InlineStyle = () => {
    const theme = {
        primary: 'teal',
        secondary: 'green',
        alert: 'yellow',
        font: 'sans-serif'
    }
    const H1 = styled.h1`font-family:${(props) => props.theme.font}`

    return (
        <ThemeProvider theme={theme}>
            <div>
                <H1 className="text-center">CSS Inline Style</H1>
                <Button color="alert">CSS Style</Button>
            </div>
        </ThemeProvider>
    )
}
