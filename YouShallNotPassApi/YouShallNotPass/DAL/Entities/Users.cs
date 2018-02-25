
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace YouShallNotPass.DAL
{
	public class User
    { 
          [Key]
          [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
          public int UserId { get; set;}

          public string email { get; set; }

          public string first_name { get; set; }

          public string last_name { get; set; }

          public int time { get; set; }

          public int attempts { get; set; }

          public int secrets { get; set; }
    }
}
