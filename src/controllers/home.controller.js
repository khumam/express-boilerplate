export default class HomeController {
  static home = (req, res) => {
    return res.json({message: 'success'});
  }
}