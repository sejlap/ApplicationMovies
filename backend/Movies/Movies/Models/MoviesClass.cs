using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Movies.Models
{
    public class MoviesClass
    {
        public int MoviesId { get; set; }
        public string title { get; set; }
        public string coverImage { get; set; }
        public string descriptionText { get; set; }
        public int releaseDate { get; set; }
        public string casts { get; set; }
        public int ratings { get; set; }
    }
}