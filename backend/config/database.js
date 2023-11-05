async function connectDB(){
    try{
        await sql.connect(config);
        console.log('Connected to the database');
    }catch (err){
        console.error('Database connection error', err);
    }
}

connectDB();