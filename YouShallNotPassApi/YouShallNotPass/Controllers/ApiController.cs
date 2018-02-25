using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using YouShallNotPass.Models;

namespace YouShallNotPass.Controllers
{
    public class ApiController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }



        
        [Route("validate")]
        public ActionResult listKeys(string code ="",  string first_name = "", string last_name = "", Guid[] hints= null, Guid[] secrets= null)
        {
            Response.AppendHeader("Access-Control-Allow-Origin", "*");
            var result = new Result();

            // Check for empty 
            if (code == "")
            {
                result.succes = false;
                result.hint.Add("emplty", "Secred Code is required.");
            }
            // Check hints
            else if (result.succes)
            {
                var hintsList = HintHellper.HintsList.Keys.ToList();
                for (int i = 0; i < hintsList.Count; i++)
                {
                    var key = hintsList[i];
                    var isSuccess = HintHellper.ValidateByKey(key, code);
                    if (!isSuccess)
                    {
                        result.succes = false;
                        result.hint.Add(key, HintHellper.HintsList[key]);
                        break;
                    }

                };
            }
            // Check for exact math 
            if (result.succes)
            {
                if (code == HintHellper.RigthCode)
                {
                    result.hint.Add("Ishallpass", "Success! Click _here_ to submit your score.");
                }
                else
                {
                    result.succes = false;
                    result.hint.Add("tryharder", HintHellper.GetRandomError());
                }
            }

            HintHellper.FillEasterEggs(first_name, last_name, result);

            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}