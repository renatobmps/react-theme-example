import styled from "styled-components"

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    gap: .5rem;
    & > img {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
`;

export default function AboutCompanyGallery() {
    return (
        <Grid>
            <img src="https://picsum.photos/300" alt="Sample cover" />
            <img src="https://via.placeholder.com/300" alt="Sample cover" />
            <img src="https://source.unsplash.com/random" alt="Sample cover" />
            <img src="https://picsum.photos/300" alt="Sample cover" />
        </Grid>
    )
}