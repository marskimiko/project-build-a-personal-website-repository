const gallery = document.getElementById('gallery');


const imageIndexes = [1,2,3];

imageIndexes.forEach((i) => {
    const photos = document.createElement('img');
    photos.src = `/photos/album_${i}.jpg`;
    photos.alt = `KIMIKO album ${i}`;
    photos.classList.add('galleryImg');
    
    })

    gallery.appendChild(photos);
});