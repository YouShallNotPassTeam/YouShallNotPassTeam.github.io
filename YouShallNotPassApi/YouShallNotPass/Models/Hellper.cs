using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace YouShallNotPass.Models
{
    public static class HintHellper
    {

        public static string RigthCode = "1 sh4ll p4ss";

        public static Dictionary<string, string> HintsList = new Dictionary<string, string>() {
            { "numbers", "Secred Code should not contain only numbers." },
            { "letters", "Secred Code should not contain only letters." },
            { "text", "Secred Code should not contain special chars." },
            { "words", "Secred Code should not contain just one word." },
            { "3L11T", "Sected Code should not contain any vowels. V0w3ls 4r3 L4m3!" },
            { "YouShallNotPass", "Sected Code should not be so negative." }
           
        };
        
        public static Dictionary<string, string> RegexList = new Dictionary<string, string>() {
            { "numbers",  @"([0-9]|\s)+"},
            { "letters",  @"([a-zA-Z]|\s)+"},
            { "text", @"(_|[a-zA-Z]|[0-9]|\s)+"},
            { "words", @".+\s+.+" },
            { "3L11T", @".*(a|e|y|i|o|A|E|Y|I|O)+.*" },
            { "YouShallNotPass", @"(n0t\s).*|.*(\sn0t\s).*|.*(\sn0t)" }
        };

        public static Dictionary<string, bool> MathType = new Dictionary<string, bool>() {
            { "numbers",  false},
            { "letters",  false},
            { "text", true},
            { "words", true },
            { "3L11T", false },
            { "YouShallNotPass", false }

        };

        public static bool ValidateByKey(string key, string text)
        {
            var regex = RegexList[key];
            var shouldMatch = MathType[key];
            Regex r = new Regex(regex, RegexOptions.IgnoreCase);
            Match m = r.Match(text);
            bool isMatch = (m.Value == text);
            return (shouldMatch == isMatch);
        }

        public static string GetRandomError()
        {
            string result = "Secred Code is incorrect.";
            Random rnd = new Random();
            int random = rnd.Next(1, 10);
            switch (random)
            {
                case 1:
                    result = "Try harder!";
                    break;
                case 2:
                    result = "Don't listen to Gandalf...";
                    break;
                case 3:
                    result = "You failed, go home.";
                    break;
                case 4:
                    result = "This is sad...";
                    break;
                case 5:
                    result = "Don't you have better things to do ?";
                    break;
            }

            return result; 
            
        }

       
        public static void FillEasterEggs(string first_name, string last_name,  Result result) {
            if (first_name.ToLower() == "chuck" && last_name.ToLower() == "norris")
            {
                result.secret.Add("Chuck", "Chuck Norris approved");
            }

            if (first_name.Length > 2 && last_name.Length > 2 && !ValidateByKey("3L11T", first_name) && !ValidateByKey("3L11T", last_name))
            {
                result.secret.Add("3l1t N4m3!", "3l1t N4m3!");
            }


            var regex = @"%.*';.* %";
           
            Regex r = new Regex(regex, RegexOptions.IgnoreCase);

            if (r.Match(first_name).Value == first_name && r.Match(last_name).Value== last_name)
            {
                result.secret.Add("boby", "Boby'; tables");
            }
        }


    }
}



