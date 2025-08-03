export default function splitText(element, splitType = 'chars') {
    const text = element.textContent;
    const parent = element.parentNode;
    const wrapper = document.createElement('span');
  
    wrapper.style.display = 'inline-block'; // Agar elemen-elemen inline tetap berbaris
  
    if (splitType === 'chars') {
      for (let char of text) {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block'; // Agar setiap karakter dapat dianimasikan
        wrapper.appendChild(charSpan);
      }
    } else if (splitType === 'words') {
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        wordSpan.style.display = 'inline-block';
        wrapper.appendChild(wordSpan);
        if (index < words.length - 1) {
          wrapper.appendChild(document.createTextNode(' ')); // Tambahkan spasi antar kata
        }
      });
    } else if (splitType === 'lines') {
      const lines = text.split('\n'); // Asumsi teks dipisahkan baris dengan newline
      lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        wrapper.appendChild(lineDiv);
      });
    }
  
    //parent.replaceChild(wrapper, element);
    return wrapper.children; // Kembalikan array dari elemen-elemen yang dipisah
  }