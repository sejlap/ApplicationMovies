using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Configuration;

using System.Data.SqlClient;
using System.Diagnostics;

namespace Movies.Controllers
{
    public class ViewMoreFeaturesController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //send a path of the pictures to a frontend
            string query = @"
                         SELECT  *
						FROM dbo.Movies
                        ORDER BY ratings DESC
						OFFSET 10 ROWS       
                        FETCH NEXT 10 ROWS ONLY;
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MoviesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;

                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
    }
}
