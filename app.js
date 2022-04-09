const fs = require('fs');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // membuat folder
  if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
  }

  // membuat file
  if (!fs.existsSync('./data/contact.json')) {
    fs.writeFileSync('./data/contact.json','[]', 'utf-8');
  }
  
  rl.question('what is your name ? ', (name) => {
    // TODO: Log the answer in a database

    const contact = {name};

    const file = fs.readFileSync('data/contact.json','utf-8');
    const contacts = JSON.parse(file);

    // console.log(contacts);
    contacts.push(contact);

    fs.writeFileSync('data/contact.json',JSON.stringify(contacts));

    console.log(`Thank you: ${name}`);
  
    rl.close();

  });