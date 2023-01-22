import styled from 'styled-components';

export const StatisticsList = styled.ul`
 display: flex;
 justify-content: space-between;
`

export const StatisticsInfo = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`
export const StatisticsItem = styled.li`
padding-right: 40px;
padding-left: 40px;
display: flex;
gap: 16px;
&:not(:last-child){
    border-right: 1px solid var(--text);
}
`
export const StatisticsImg = styled.img`
display: block;
width: 47px;
height: 47px;
`
