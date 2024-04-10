const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const { UserModel, IndustryModel, tableData, tableDatas } = require("./config"); // Import your models


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.render("home");
});
app.get("home",(req,res)=>{
    res.render("home");
})
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/industry_signup", (req, res) => {
    res.render("industry_signup");
});

app.get("/industry_login", (req, res) => {
    res.render("industry_login");
});
app.get("/industry_home",(req,res)=>{
    res.render("industry_home");
})
app.get("/user",(req,res)=>{
    res.render("user")
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard");
})
app.get("/safety_compilance",(req,res)=>{
    res.render("safety_compilance");
})
app.get("/product_page",(req,res)=>{
    res.render("product_page");
})
//adding products
app.get("/product_1", async (req, res) => {
    try {
        const products = await tableData.find();
        res.render("product_1", { tableData: products });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
app.get("/data", async(req,res)=>{
    try{
        const products = await tableDatas.find();
        res.render("data",{ tableDatas: products});
    }
    catch(error){
        console.error(error);
        res.status(500).send("An error occured");
    }
})
app.get("/add_product",async(req,res)=>{
    const { name, volume, rate, cost, price} = req.body;

    try{
        res.render("add_product", { tableData });
    }
    catch (error){
        console.log(error);
        res.send("An error Occured");
    }
})
app.get("/add_data",async(req,res)=>{
    const { year, imports, exports, rate} = req.body;

    try{
        res.render("add_data", { tableDatas });
    }
    catch (error){
        console.log(error);
        res.send("An error Occured");
    }
})
app.post('/add_product', async (req, res) => {
    const { name, volume, rate, cost, price } = req.body;
    try {
        const newProduct = new tableData({
            name,
            volume,
            rate,
            cost,
            price
        });
        await newProduct.save();
        res.redirect('/product_1'); // Redirect to the product page after adding a product
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
app.post('/add_data', async (req, res) => {
    const { year, imports, exports, rate } = req.body;
    try {
        const newProduct = new tableDatas({
            year,
            imports,
            exports,
            rate
        });
        await newProduct.save();
        res.redirect('/data'); // Redirect to the product page after adding a product
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
//delete the data
app.post('/delete_product/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      // Find and remove the product from the database
      await tableData.findByIdAndRemove(productId);
  
      res.sendStatus(200); // Send a success status code
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting the product");
    }
});
app.post('/delete_data/:id', async (req, res) => {
    const productId = req.params.id;
  
    try {
      // Find and remove the product from the database
      await tableDatas.findByIdAndRemove(productId);
  
      res.sendStatus(200); // Send a success status code
    } catch (error) {
      console.error(error);
      res.status(500).send("Error deleting the product");
    }
});
//edit the data
app.get("/update_product/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await tableData.findById(productId);
        if (!product) {
            res.status(404).send("Product not found");
        } else {
            res.render("update_product", { product });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
app.get("/update_data/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await tableDatas.findById(productId);
        if (!product) {
            res.status(404).send("Product not found");
        } else {
            res.render("update_data", { product });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
app.post('/update_product/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, volume, rate, cost, price } = req.body;
  
    try {
      // Find and update the product in the database
      await tableData.findByIdAndUpdate(productId, { name, volume, rate, cost, price });
  
      // Redirect back to the product page after updating
      res.redirect('/product_1');
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating the product");
    }
});
app.post('/update_data/:id', async (req, res) => {
    const productId = req.params.id;
    const { year, imports, exports, rate } = req.body;
  
    try {
      // Find and update the product in the database
      await tableDatas.findByIdAndUpdate(productId, { year, imports, exports, rate });
  
      // Redirect back to the product page after updating
      res.redirect('/data');
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating the product");
    }
});


// Register a user
app.post("/signup", async (req, res) => {
    const { fullname, username, password, confirmpassword } = req.body;

    try {
        const existingUser = await UserModel.findOne({ name: username });

        if (existingUser) {
            return res.send("User already exists. Please try another name...");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new UserModel({
            fullname,
            name: username,
            password: hashedPassword,
            confirmpassword,
        });

        await newUser.save();
        res.render("login");
    } catch (error) {
        console.error(error);
        res.send("An error occurred");
    }
});

// Register an industry
app.post("/industry_signup", async (req, res) => {
    const {
        name,
        corporate_num,
        type,
        off_num,
        phone,
        email,
        date,
        pass,
        confirmpass,
    } = req.body;

    try {
        const existingIndustry = await IndustryModel.findOne({ email });

        if (existingIndustry) {
            return res.send("Industry already exists. Please try another email...");
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(pass, saltRounds);

        const newIndustry = new IndustryModel({
            name,
            corporate_num,
            type,
            off_num,
            phone,
            email,
            date,
            pass: hashedPassword,
            confirmpass,
        });

        await newIndustry.save();
        res.render("industry_login");
    } catch (error) {
        console.error(error);
        res.send("An error occurred");
    }
});

// User login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ name: username });

        if (!user) {
            return res.send("Username not found...");
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (isPasswordMatch) {
            return res.render("user");
        } else {
            return res.send("Wrong password");
        }
    } catch (error) {
        console.error(error);
        res.send("An error occurred");
    }
});

// Industry login
app.post("/industry_login", async (req, res) => {
    const { email, pass } = req.body;

    try {
        const industry = await IndustryModel.findOne({ email });

        if (!industry) {
            return res.send("Email not found...");
        }

        const isPasswordMatch = await bcrypt.compare(pass, industry.pass);

        if (isPasswordMatch) {
            return res.render("industry_home");
        } else {
            return res.send("Wrong password");
        }
    } catch (error) {
        console.error(error);
        res.send("An error occurred");
    }
});





//server
const port = 5000;   
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})