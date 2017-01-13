using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class MARS_BreadcrumbsController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        private MarsDatabase _ctx = null;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public MARS_BreadcrumbsController(MarsDatabase context)
        {
            _ctx = context;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<MARS_Breadcrumbs> Get(string id)
        {
            return await _ctx.MARS_Breadcrumbs
                            .Include(c => c.Links)
                            .Where(t => t.id == int.Parse(id)).SingleOrDefaultAsync();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<object> Post([FromBody]MARS_Breadcrumbs model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        _ctx.MARS_Breadcrumbs.Add(model);
                        await _ctx.SaveChangesAsync();
                        _ctxTransaction.Commit();
                        message = "Saved Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        e.ToString();
                        message = "Saved Error";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<object> Put([FromBody]MARS_Breadcrumbs model)
        {
            object result = null; string message = "";
            if (model == null)
            {
                return BadRequest();
            }
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _ctx.MARS_Breadcrumbs
                                                .Include(c => c.Links)
                                            .Where(t => t.id == model.id).SingleOrDefault<MARS_Breadcrumbs>();
                        if (entityUpdate != null)
                        {
                            entityUpdate.MARS_Pageid = model.MARS_Pageid;
                            entityUpdate.BreadCrumbText = model.BreadCrumbText;
                            foreach (MARS_Breadcrumb_Links links in model.Links)
                            {
                                if (!entityUpdate.Links.Any(item => item.id == links.id))
                                {
                                    entityUpdate.Links.Add(new MARS_Breadcrumb_Links()
                                    {
                                        url = links.url,
                                        urltext = links.urltext,
                                        MARS_Breadcrumbsid = entityUpdate.id
                                    });
                                }
                                else
                                {
                                    var getLinks = _ctx.MARS_Breadcrumb_Links.FirstOrDefault(x => x.id == links.id);
                                    getLinks.url = links.url;
                                    getLinks.urltext = links.urltext;
                                    getLinks.MARS_Breadcrumbsid = model.id;
                                }
                            }
                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Entry Updated";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Entry Update Failed!!";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<object> Delete(int id)
        {
            object result = null; string message = "";
            using (_ctx)
            {
                using (var _ctxTransaction = _ctx.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _ctx.MARS_Breadcrumbs.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_Breadcrumbs.Remove(idToRemove);
                            await _ctx.SaveChangesAsync();
                        }
                        _ctxTransaction.Commit();
                        message = "Deleted Successfully";
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                        message = "Error on Deleting!!";
                    }
                    result = new
                    {
                        message
                    };
                }
            }
            return result;
        }
    }
}
