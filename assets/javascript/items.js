let menu_data = [
    {
        nama : "Kebab",
        gambar : "assets/img/kebab_01.jpg",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        deskripsi : "Kebab dengan isi daging cincang dan berbagai sayuran"
    },
    {
        nama : "Nasi Goreng",
        gambar : "assets/img/nasi_goreng.jpg",
        link : "https://www.pexels.com/id-id/foto/piring-lezat-pandangan-atas-fotografi-makanan-4940832/",
        deskripsi : "Nasi goreng dengan "
    },
    {
        nama : "Kebab",
        gambar : "assets/img/kebab_01.jpg",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        deskripsi : "Kebab dengan isi daging cincang dan berbagai sayuran"
    },
    {
        nama : "Nasi Goreng",
        gambar : "assets/img/nasi_goreng.jpg",
        link : "https://www.pexels.com/id-id/foto/piring-lezat-pandangan-atas-fotografi-makanan-4940832/",
        deskripsi : "Nasi goreng spesial"
    },
    {
        nama : "Kebab",
        gambar : "assets/img/kebab_01.jpg",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        deskripsi : "Kebab dengan isi daging cincang dan berbagai sayuran"
    },
    {
        nama : "Nasi Goreng",
        gambar : "assets/img/nasi_goreng.jpg",
        link : "https://www.pexels.com/id-id/foto/piring-lezat-pandangan-atas-fotografi-makanan-4940832/",
        deskripsi : "Nasi goreng spesial"
    }
]

function renderMenu(){
    const menus = document.querySelector(".card-container");
    
    menus.innerHTML = "";
    
    for (const menu of menu_data) {
        // const card_menu = "<div class='card menu'>";
        menus.innerHTML += `<div class="card menu">
                                <h3>${menu.nama}</h3>
                                <img src="${menu.gambar}" alt="${menu.nama}" class="menu-image">
                                <a href="${menu.link}" target="_blank">Photo by Pixabay</a>
                                <p>${menu.deskripsi}</p>
                                <a 
                                    href="https://shopee.co.id/m/shopeefood?smtt=9&stm_medium=organic&stm_source=google-rw" 
                                    class="button" target="_blank">
                                    Pesan Sekarang
                                </a>
                            </div>`;
        
    }
}

const location_data = [
    {
        image : "assets/img/jln_moh_kahfi.jpg",
        alt : "Zach Resto di jln. Moch Kahfi II no. 14",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        tempat : "Jln. Moch. Kahfi II no, 14"

    },
    {
        image : "assets/img/jln_moh_kahfi.jpg",
        alt : "Zach Resto di jln. Moch Kahfi II no. 14",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        tempat : "Jln. Moch. Kahfi II no, 14"

    },
    {
        image : "assets/img/jln_moh_kahfi.jpg",
        alt : "Zach Resto di jln. Moch Kahfi II no. 14",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        tempat : "Jln. Moch. Kahfi II no, 14"

    },
    {
        image : "assets/img/jln_moh_kahfi.jpg",
        alt : "Zach Resto di jln. Moch Kahfi II no. 14",
        link : "https://www.pexels.com/id-id/foto/bar-kosong-diisi-dengan-lampu-260922/",
        tempat : "Jln. Moch. Kahfi II no, 14"

    }
]

function renderPlace(){
    const locations = document.querySelector("#lokasi>.content>.card");

    locations.innerHTML = "";

    for (const location of location_data) {
        locations.innerHTML += `<div class="location">
                                    <img src="${location.image}" alt="${location.alt}">
                                    <div class="details">
                                        <a href="${location.link}" target="_blank">Foto oleh Pixabay</a>
                                        <h3>${location.tempat}</h3>
                                        <a href="http://maps.google.com/" class="button" target="_blank">
                                            Ke Lokasi
                                        </a>
                                    </div>
                                </div>`
    }
}

renderMenu();
renderPlace();