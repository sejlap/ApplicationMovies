using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Movies.Models;
namespace Movies.Controllers
{
    public class MoviesController : ApiController
    {
        public object ClientScript { get; private set; }

        public HttpResponseMessage Get()
        {
            
            string query = @"
                        SELECT TOP 10 *
						FROM dbo.Movies 
                        ORDER BY ratings DESC
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MoviesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                    cmd.CommandType = CommandType.Text;

                    da.Fill(table);
               /*if (table.Rows.Count > 0)
                {
                    DataView dv = table.DefaultView;
                    dv.Sort = "ratings DESC";
                    table = dv.ToTable();
                }
               */
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
            
        }

        public string Put(MoviesClass m)
        {
            try
            {
                string query = @"
                    update dbo.Movies set

                    ratings='" + m.ratings + @"'
                     where MoviesId=" + m.MoviesId + @"
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

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }

        }
    }




}
