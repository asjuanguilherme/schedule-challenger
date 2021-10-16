import styled from 'styled-components'

export const Wrapper = styled.div`
   user-select: none;
   width: 100%;
   height: 100%;
   min-height: 100vh;
   max-width: 500px;

   background-color: ${props => props.theme.colors.primary};
   color: white;
   border-radius: 0 2rem 0 0 ;
   
   padding: 1rem;
   text-align: center;
   
   @media screen and (max-width: 991px) {
      height: auto;
      min-height: unset;
      max-width: unset;

      border-radius: 0 0 2rem 0;
      padding: 0 1rem;
      padding-top: 1rem;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
   }
`

export const Header = styled.div`
   width: 100%;
   margin-bottom: 8rem;
   text-align: left;

   @media screen and (max-width: 991px) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
   }
`

export const Time = styled.div`
   font-size: .875rem;
   @media screen and (max-width: 480px) {
      display: none;
   } 
`

export const TimeMobile = styled.div`
   font-size: .875rem;
   @media screen and (min-width: 480px) {
      display: none;
   } 
`

export const Logo = styled.img`
   @media screen and (min-width: 991px) {
      display: none;
   }
`

export const ProfileUser = styled.div`
   text-align: center;
   @media screen and (max-width: 991px) {
      text-align: left;
      display: flex;
      align-items: center;
      position: relative;
      bottom: -3.5rem;
   }

   @media screen and (max-width: 480px) {
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
      margin-right: .75rem;
   }

   @media screen and (max-width: 480px) {
      height: 85px;
      width: 85px;
      margin-right: .5rem;
      margin-bottom: 0;
   }
`

export const UserTitle = styled.div`
   margin-bottom: 1rem;

   @media screen and (max-width: 480px) {
      margin-bottom: 0;
   }
`

export const Name = styled.h2`
   @media screen and (max-width: 480px) {
      font-size: 1rem;
      margin-bottom: -.3rem;
   }
`

export const Role = styled.span`
   margin-bottom: 1rem;
   font-style: italic;

   @media screen and (max-width: 480px) {
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