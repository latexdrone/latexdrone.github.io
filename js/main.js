export const links = [
{
        name: "BlueSky",
        link: "https://bsky.app/profile/slavedafy.cz",
},
{
        name: "Twitter",
        link: "https://x.com/slave_Dafy",
},
{
        name: "Recon",
        link: "https://www.recon.com/view_profile.aspx?id=4516392",
},
{
        name: "Instagram",
        link: "https://www.instagram.com/slavedafy/",
},

];

const linkContainer = document.getElementById("links");

function addLink(name, link) {
    return `
  <a href="${link}" class="link" target="blank">
    <span>${name}  </span>
  </a>
  `;
}

let allLinks = "";

links.forEach((ele) => {
    let link = ele.link;
    let name = ele.name;

    allLinks += addLink(name, link);
});

linkContainer.innerHTML = allLinks;
