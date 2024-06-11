import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none; /* Remove default bullets */
  padding: 0; /* Remove default padding */
`;

const StyledLi = styled.li`
  position: relative;
  padding-left: 1.5em; /* Space for custom bullet */
  margin-bottom: 0.5em; /* Space between list items */
  text-align: left;

  &::before {
    content: "-"; /* Custom dash bullet */
    position: absolute;
    left: 0;
    color: #4caf50; /* Color of the bullet */
  }
`;

export interface Props {
  listItems: string[];
}

const DashedUnorderedList = ({ listItems }: Props) => {
  return (
    <StyledUl>
      {listItems.map((item) => (
        <StyledLi> {item} </StyledLi>
      ))}
    </StyledUl>
  );
};

export default DashedUnorderedList;
