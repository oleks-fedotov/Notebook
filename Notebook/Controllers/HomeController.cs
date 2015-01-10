using Notebook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Notebook.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetNotes()
        {
            List<Note> model = new List<Note>();
            model.Add(new Note() { creationDate = new DateTime(2014, 12, 1), mainText = "Some text here" });
            model.Add(new Note() { creationDate = new DateTime(2014, 11, 30), mainText = "Content of the note" });
            return Json(new { notes = model }, JsonRequestBehavior.AllowGet);
        }
    }
}