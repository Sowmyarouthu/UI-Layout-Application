abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    });
  }

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return console.error(err); }
      res.status(200).json(count);
    });
  }

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

  // Update by id
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  send = (req,res)=>{
   
    res.console.log(req);
    var email = require('emailjs');

    var server = email.server.connect({
      user: 'soumyarouthu50@gmail.com',
      password: 'routhu50',
      host: 'smtp.gmail.com',
      ssl: true
    });
    
    server.send({
      text: req.body.name,
      from: 'soumyarouthu',
      to: 'vizagshare@gmail.com',
      cc: '',
      subject: 'Grocery List',
      
      attachment: 
   [
      {data:"<html><h5>List the Groceries</h5><ul class='list-group'><li class='list-group-item'><div class='row'><div>req.body.name</div><div>req.body.quantity</div></div> </li></ul></html>", alternative:true}
      
   ]
    }, function (err, message) {
      console.log(err || message);
    });
  }
}

export default BaseCtrl;
