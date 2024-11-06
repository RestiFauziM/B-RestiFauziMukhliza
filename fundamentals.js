const library = [];

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; 

    library.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} oleh ${book.author}, diterbitkan pada ${book.year}`;
        bookList.appendChild(listItem);
        console.log(`Book ${index + 1}: ${book.title}, ${book.author}, ${book.year}`);
    });
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = parseInt(document.getElementById('year').value); 

    if (title && author && year) {
        const book = {
            title: title,
            author: author,
            year: year,
            isAvailable: true 
        };
        
        if (book.year >= 2000 && book.year <= 2023) {
            library.push(book);
            alert(`Buku '${book.title}' berhasil ditambahkan ke perpustakaan.`); 
            console.log(`Buku '${book.title}' berhasil ditambahkan ke perpustakaan.`);
        } else {
            console.log(`Buku '${book.title}' tidak ditambahkan karena tahun di luar rentang.`);
        }

        displayBooks();
    } else {
        console.log("Data buku tidak lengkap.");
    }

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
}

library.push(
    { title: "Pemrograman JavaScript", author: "Andi", year: 2019, isAvailable: true },
    { title: "HTML untuk Pemula", author: "Budi", year: 2015, isAvailable: false }
);

displayBooks();

console.log("Buku pertama tersedia:", library[0].isAvailable == true);
console.log("Buku kedua tersedia:", library[1].isAvailable === true); 
