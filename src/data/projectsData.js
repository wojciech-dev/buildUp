import project1 from 'assets/images/p1.jpg';
import project2 from 'assets/images/p2.jpg';
import project3 from 'assets/images/p3.jpg';
import project4 from 'assets/images/p4.jpg';
import project5 from 'assets/images/p5.jpg';
import project6 from 'assets/images/p6.jpg';

import photo1 from 'assets/images/project1.jpg';
import photo2 from 'assets/images/project2.jpg';
import photo3 from 'assets/images/project3.jpg';
import photo4 from 'assets/images/project4.jpg';
import photo5 from 'assets/images/project5.jpg';
import photo6 from 'assets/images/project6.jpg';

function convertToSlug(Text) {
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
}

export const projectsData = [
    {
        id: 1,
        title: 'Modern style',
        body: 'Modern architecture, or modernist architecture, was an architectural style based upon new and innovative technologies of construction, particularly the use of glass, steel, and reinforced concrete; the idea that form should follow function (functionalism); an embrace of minimalism; and a rejection of ornament.',
        link: `/projects/${convertToSlug('Modern style')}`,
        slug: convertToSlug('Modern style'),
        img: project1,
        photo: photo1,
    },
    {
        id: 2,
        title: 'Cubic style',
        body: 'Cubic architecture is a modern-era architectural style that was commonly used at the end of the 90s and into the early 2000s, but has a history that dates to the 70s in Rotterdam, The Netherlands.',
        link: `/projects/${convertToSlug('Cubic style')}`,
        slug: convertToSlug('Cubic style'),
        img: project2,
        photo: photo2,
    },
    {
        id: 3,
        title: 'Minimal style',
        body: 'Minimalist architecture, sometimes referred to as minimalism, involves the use of simple design elements, without ornamentation or decoration. Proponents of minimalism believe that condensing the content and form of a design to its bare essentials, reveals the true essence of architecture',
        link: `/projects/${convertToSlug('Minimal styl')}`,
        slug: convertToSlug('Minimal styl'),
        img: project3,
        photo: photo3,
    },
    {
        id: 4,
        title: 'Flowing style',
        body: 'One of my favorite types of architecture is what I would call flowing architecture. The reason I call it this is because the structures seem to flow with their smooth curves, their twists and turns, and their out of the ordinary design. Most structures have a square look to them with sharp corners and building block design. However, the works of Frank Gehry and Arata Isozaki are known to be twisting and curving all over the place. They do not have a set pattern to the design, the buildings just flow.',
        link: `/projects/${convertToSlug('Flowing style')}`,
        slug: convertToSlug('Flowing style'),
        img: project4,
        photo: photo4,
    },
    {
        id: 5,
        title: 'Business style',
        body: 'In the business sector, business architecture is a discipline[citation needed] that "represents holistic, multidimensional business views of: capabilities, end‐to‐end value delivery, information, and organizational structure; and the relationships among these business views and strategies, products, policies, initiatives, and stakeholders',
        link: `/projects/${convertToSlug('Business style')}`,
        slug: convertToSlug('Business style'),
        img: project5,
        photo: photo5,
    },
    {
        id: 6,
        title: 'Abstract style',
        body: 'Abstract art uses visual language of shape, form, color and line to create a composition which may exist with a degree of independence from visual references in the world.[1] Western art had been, from the Renaissance up to the middle of the 19th century, underpinned by the logic of perspective and an attempt to reproduce an illusion of visible reality. ',
        link: `/projects/${convertToSlug('Abstract style')}`,
        slug: convertToSlug('Abstract style'),
        img: project6,
        photo: photo6,
    },

];