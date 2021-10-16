export const getProfile = async() => {
   return await fetch(`${window.location.origin}/api/profile.json`)
      .then( data => data.json())
}