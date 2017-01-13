using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using Msde.Mars.WebApi.Utility;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Msde.Mars.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class MARS_ImagesController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        private MarsDatabase _ctx = null;

        /// <summary>
        /// 
        /// </summary>
        private readonly IOptions<Environment> _settings;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public MARS_ImagesController(MarsDatabase context, IOptions<Environment> settingsOptions)
        {
            _settings = settingsOptions;
            _ctx = context;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [DisableCors]
        [HttpGet("{id}")]
        public async Task<MARS_Images> Get(string id)
        {
            return await _ctx.MARS_Images.Where(t => t.id == int.Parse(id)).SingleOrDefaultAsync();
        }

        [DisableCors]
        [HttpGet]
        public async Task<List<FilePath>> Get()
        {
            List<FilePath> files = new List<FilePath>();
            DirectoryInfo dirInfo = new DirectoryInfo(_settings.Value.AppPath + @"\images\");
            await Task.Run(() => {
                dirInfo
                    .GetFiles()
                        .ToList()
                            .ForEach(t => files
                                .Add(new FilePath() {
                                    path = "http://" + @Request.Host + "/StaticFiles/" + t.Name,
                                    active = false,
                                    text = t.Name.ToString() }));
           });
            return files.ToList<FilePath>();
        }

        

        /// <summary>
        /// 
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        [DisableCors]
        [HttpPost]
        public async Task<object> Post([FromBody]MARS_Images model)
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
                        _ctx.MARS_Images.Add(model);
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
        /// <param name="id"></param>
        /// <param name="model"></param>
        /// <returns></returns>
        [DisableCors]
        [HttpPut]
        public async Task<object> Put([FromBody]MARS_Images model)
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
                        var entityUpdate = _ctx.MARS_Images.FirstOrDefault(x => x.id == model.id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.MARS_Pageid = model.MARS_Pageid;
                            entityUpdate.image = model.image;
                            entityUpdate.imagename = model.imagename;
                            entityUpdate.description = model.description;
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
        /// <param name="value"></param>
        /// <returns></returns>
        [DisableCors]
        [HttpPost]
        public async Task<JsonResult> PostFile([FromBody]string value)
        {
            //_environment.WebRootPath = "http://localhost:55231/";
            foreach (var file in Request.Form.Files)
            {
                if (file != null)
                {
                    var stream = file.OpenReadStream();
                    var fileName = file.Name;
                    var path = Path.Combine("http://localhost:55231", file.Name);
                    using (var filestream = System.IO.File.Create(path))
                    {
                        stream.Position = 0;
                        await stream.CopyToAsync(filestream);
                        byte[] fc;
                        using (var binaryReader = new BinaryReader(filestream))
                        {
                            filestream.Position = 0;
                            fc = binaryReader.ReadBytes(int.Parse(filestream.Length.ToString()));
                            return Json("success");
                        }
                    }
                }
            }
            return Json("nosuccess");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [DisableCors]
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
                        var idToRemove = _ctx.MARS_Images.SingleOrDefault(x => x.id == id);
                        if (idToRemove != null)
                        {
                            _ctx.MARS_Images.Remove(idToRemove);
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
