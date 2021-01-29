import project1 from 'assets/images/p1.jpg';
import project2 from 'assets/images/p2.jpg';
import project3 from 'assets/images/p3.jpg';
import project4 from 'assets/images/p4.jpg';
import project5 from 'assets/images/p5.jpg';
import project6 from 'assets/images/p6.jpg';

import photo1 from 'assets/images/project.jpg';

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
        body: 'Modern style Lorem ilementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Modern style')}`,
        slug: convertToSlug('Modern style'),
        img: project1,
        photo: photo1,
    },
    {
        id: 2,
        title: 'Cubic style',
        body: 'Cubic style Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae elementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Cubic style')}`,
        slug: convertToSlug('Cubic style'),
        img: project2,
        photo: photo1,
    },
    {
        id: 3,
        title: 'Minimal style',
        body: 'Minimal styl Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae elementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Minimal styl')}`,
        slug: convertToSlug('Minimal styl'),
        img: project3,
        photo: photo1,
    },
    {
        id: 4,
        title: 'Flowing style',
        body: 'Flowing style Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae elementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Flowing style')}`,
        slug: convertToSlug('Flowing style'),
        img: project4,
        photo: photo1,
    },
    {
        id: 5,
        title: 'Business style',
        body: 'Business style Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae elementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Business style')}`,
        slug: convertToSlug('Business style'),
        img: project5,
        photo: photo1,
    },
    {
        id: 6,
        title: 'Abstract style',
        body: 'Abstract style Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae elementum tortor. Mauris eget sodales sapien. Ut porttitor metus vel urna vulputate gravida. Praesent id metus orci. Proin hendrerit libero ligula, quis volutpat tortor vestibulum quis. Praesent eu nunc in leo vulputate pharetra. Quisque blandit sem ante. Proin eleifend, justo vel facilisis feugiat, lorem arcu dignissim augue, sit amet auctor nisl enim a ex. Quisque porttitor ante a justo viverra gravida in id odio. Nullam maximus orci dui, quis faucibus nunc vulputate eu. Duis tortor urna, tempor a magna vel, tempus placerat felis.',
        link: `/projects/${convertToSlug('Abstract style')}`,
        slug: convertToSlug('Abstract style'),
        img: project6,
        photo: photo1,
    },

];