import styled from 'styled-components';
import { stockInformations } from '../constants/stockInformation';

const MainPage = () => {
  const handleSearchButtonClick = () => {
    console.log('검색 버튼 클릭');
  };

  return (
    <MainPageContainer>
      <MainTitle>Notify</MainTitle>
      <MainSubTitle>주식 정보 설정</MainSubTitle>
      <MainDescription>주식 정보는 매일 아침 9시와 오후 3시 30분에 발송됩니다.</MainDescription>
      <MainSearchForm>
        <MainSearchInput onClick={handleSearchButtonClick} />
        <MainSearchButton onClick={handleSearchButtonClick}>검색</MainSearchButton>
        <MainSearchButton>내 관심목록</MainSearchButton>
      </MainSearchForm>

      <MainContentTitle>
        <div>#</div>
        <div>종목 명</div>
        <div>추가</div>
      </MainContentTitle>
      <MainContent>
        {stockInformations.map((stockInformation) => (
          <MainContentTitle key={stockInformation.id}>
            <div>{stockInformation.id}</div>
            <div>{stockInformation.stock}</div>
            <PlusButton>관심종목 추가</PlusButton>
          </MainContentTitle>
        ))}
      </MainContent>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  width: 40rem;
  margin: 0 auto;
  background: #eff6f5;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0.5rem 0;
`;

const MainSubTitle = styled.div`
  font-size: 1.3rem;
`;

const MainDescription = styled.div`
  font-size: 1.2rem;
  padding: 1.5rem 0;
`;

const MainSearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MainSearchInput = styled.input`
  width: 20rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
`;

const MainSearchButton = styled.button`
  padding: 0.4rem 1rem;
  border: 1px solid #00770c;
  color: #00770c;
  border-radius: 0.5rem;
  font-size: 1rem;
  white-space: nowrap;
`;

const MainContentTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  div {
    width: 100%;
    text-align: center;
  }
`;

const MainContent = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgray;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    text-align: center;
  }
`;

const PlusButton = styled.button`
  padding: 0.4rem 1rem;
  border: 1px solid blue;
  color: blue;
  border-radius: 0.5rem;
  font-size: 1rem;
  white-space: nowrap;
  width: 16rem;
  margin: 0 2.5rem;
`;
