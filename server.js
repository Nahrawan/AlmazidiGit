const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*' , function(req,res){
  res.sendFile(path.join(__dirname, 'build','index.html'));
});

//Yes The branch2 is here

const PORT =process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


// This is Juhaina
