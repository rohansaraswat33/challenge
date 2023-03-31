const func =(req,res)=>{
    const data=req.body.data
    const alpha=data.filter((ele)=>{
        return ('a'<=ele && ele<='z') || ('A'<=ele && ele<='Z')
    })
    const odd=data.filter((ele)=>{
        return Number(ele) && (ele%2==1)
    })
    const even=data.filter((ele)=>{
        return Number(ele) && (ele%2==0)
    })
res.json({is_success:true,
    user_id: "john_doe_17091999", 
    email : "john@xyz.com",
    roll_number:"ABCD123",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alpha,

})

}
module.exports={func}