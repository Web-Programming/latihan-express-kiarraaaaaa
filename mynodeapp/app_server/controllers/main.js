const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

//buat controllers untuk membuat halaman kontak
const kontak =(req,res)=>{
	res.render('kontak',{title:'express'});
};

module.exports = { index, kontak }; 
