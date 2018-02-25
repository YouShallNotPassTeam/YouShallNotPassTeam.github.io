using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace YouShallNotPass.Models
{
    public class Result
    {
        public Result()
        {
            succes = true;
            hint = new Dictionary<string, string>();
            secret = new Dictionary<string, string>();
        }

        public bool succes { get; set; }

        public Dictionary<string, string> hint { get; set; }

        public Dictionary<string, string> secret { get; set; }

    }
}



