import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;
const Table = styled.table`
  min-width: 80%;
  margin: 0 auto;
  text-align: left;
  border-collapse: collapse;
`;
const THead = styled.thead`
  color: gray;
  font-weight: bold;
  border-bottom: 2px solid gray;
`;
const TBody = styled.tbody``;
const Tr = styled.tr`
  border-bottom: 1px dashed gray;
`;
const Th = styled.th``;
const Td = styled.td``;

const TestsPrice = () => {
  return (
    <Container>
      <Table>
        <THead>
          <Tr>
            <Th>SL</Th>
            <Th>Category</Th>
            <Th>Test Name</Th>
            <Th>Price</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td>1</Td>
            <Td>Pathology</Td>
            <Td>CBC</Td>
            <Td>550 tk</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Pathology</Td>
            <Td>RBS FBS</Td>
            <Td>150 tk</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Pathology</Td>
            <Td>RBS THAM</Td>
            <Td>150 tk</Td>
          </Tr>
          <Tr>
            <Td>4</Td>
            <Td>Pathology</Td>
            <Td>S. Cretenin</Td>
            <Td>400 tk</Td>
          </Tr>
          <Tr>
            <Td>5</Td>
            <Td>Pathology</Td>
            <Td>SGPT</Td>
            <Td>400 tk</Td>
          </Tr>
          <Tr>
            <Td>6</Td>
            <Td>Pathology</Td>
            <Td>CRP</Td>
            <Td>400 tk</Td>
          </Tr>
          <Tr>
            <Td>7</Td>
            <Td>Pathology</Td>
            <Td>ASO</Td>
            <Td>400 tk</Td>
          </Tr>
          <Tr>
            <Td>8</Td>
            <Td>Pathology</Td>
            <Td>RA</Td>
            <Td>400 tk</Td>
          </Tr>
          <Tr>
            <Td>9</Td>
            <Td>Ultrasound</Td>
            <Td>Full Abdomen</Td>
            <Td>780 tk</Td>
          </Tr>
          <Tr>
            <Td>10</Td>
            <Td>Ultrasound</Td>
            <Td>Upper Abdomen</Td>
            <Td>600 tk</Td>
          </Tr>
          <Tr>
            <Td>11</Td>
            <Td>Ultrasound</Td>
            <Td>Lower Abdomen</Td>
            <Td>600 tk</Td>
          </Tr>
          <Tr>
            <Td>12</Td>
            <Td>Ultrasound</Td>
            <Td>KUB</Td>
            <Td>600 tk</Td>
          </Tr>
          <Tr>
            <Td>13</Td>
            <Td>Ultrasound</Td>
            <Td>Pregnancy Profile</Td>
            <Td>550 tk</Td>
          </Tr>
          <Tr>
            <Td>14</Td>
            <Td>ECG</Td>
            <Td>ECG</Td>
            <Td>300 tk</Td>
          </Tr>
        </TBody>
      </Table>
    </Container>
  );
};

export default TestsPrice;
