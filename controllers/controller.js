const { Message } = require("../models/message");

const homePage = (req, res) => {
  res.redirect("/Feed");
};

const Feed = (req, res) => {
    if(req.method === "GET"){
        Message.find()
        .then((data) => {
          res.render("Feed", {data});
        })
        .catch((err) => {
          console.log(err);
        });
    }
        
    if(req.method === "POST"){
        console.log(req.body)
        const newMessage = new Message(req.body)
        newMessage.save()
        .then( () => {
            res.redirect('/')
        })
        .catch( (err) => {
            console.log(err)
        })
        
    }
  
};

const showMessage = (req, res) => {
    Message.findById({_id: req.params.id})
        .then((data) => {
          res.render("message", {data});
        })
        .catch((err) => {
          console.log(err);
        });
}

const editMessage = (req, res) => {
    if(req.method === "GET") {
        Message.findById({_id: req.params.id})
        .then((data) => {
          console.log(data.name);
          res.render("edit", {data});
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if(req.method === "POST") {
        Message.findByIdAndUpdate({_id: req.params.id})
        .then( (data) => {
            data.name = req.body.name
            data.post = req.body.post
            data.save()
            .then( () => {
                res.redirect("/")
            })
            .catch( (err) => {
                console.log(err)
            })
        })
    }
}
const deleteMessage = (req, res) => {
    Message.findByIdAndDelete({_id: req.params.id})
    .then( () => {
        res.redirect('/')
    })
    .catch( (err) => {
        console.log(err)
    })
}


module.exports = {
  homePage,
  Feed,
  showMessage,
  editMessage,
  deleteMessage,
};
