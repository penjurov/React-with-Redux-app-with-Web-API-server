using PluralSightAdminServer.Data;
using PluralSightAdminServer.Models;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace PluralSightAdminServer.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class AuthorController : ApiController
    {
        private readonly DataBase dataBase;

        public AuthorController()
        {
            dataBase = DataBase.Instance;
        }

        public HttpResponseMessage Get()
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, dataBase.GetAuthors());
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        public HttpResponseMessage Post(Author author)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, dataBase.SaveAuthor(author));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }

        public HttpResponseMessage Delete(int id)
        {
            try
            {
                dataBase.DeleteAuthor(id);
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
