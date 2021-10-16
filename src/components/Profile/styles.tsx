import styled from 'styled-components'

export const Wrapper = styled.div`
   background-color: ${props => props.theme.colors.primary};
   color: white;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100%;
   min-height: 100vh;
   max-width: 500px;

   border-radius: 0 2rem 0 0 ;

   @media screen and (max-width: 991px) {
      height: auto;
      min-height: unset;
      max-width: unset;

      border-radius: 0 0 2rem 0;
      padding: 0 1rem;

      flex-direction: row;
      justify-content: flex-start;
   }
`

export const ProfileUser = styled.div`
   @media screen and (max-width: 991px) {
      display: flex;
      align-items: center;
      position: relative;
      bottom: -1.5rem;
   }
`

export const UserAvatar = styled.img`
   border: 3px solid white;
   height: 150px;
   width: 150px;
   border-radius: 50%;
   margin-bottom: 1rem;

   
   @media screen and (max-width: 991px) {
      height: 85px;
      width: 85px;
      margin-right: .5rem;
      margin-bottom: 0;
   }
`

export const UserTitle = styled.div``

export const Name = styled.h2`
   @media screen and (max-width: 991px) {
      font-size: 1rem;
      margin-bottom: -.3rem;
   }
`

export const Role = styled.span`
   margin-bottom: 1rem;
   font-style: italic;

   @media screen and (max-width: 991px) {
      display: inline-block;
      font-size: .75rem;
   }
`

export const ProfileDetails = styled.div`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-bottom: .2rem;

   span {
      margin: 0 .5rem;
   }

   @media screen and (max-width: 991px) {
      display: none;
   }
`

export const CompanyTime = styled.div`
   @media screen and (max-width: 991px) {
      display: none;
   }
`