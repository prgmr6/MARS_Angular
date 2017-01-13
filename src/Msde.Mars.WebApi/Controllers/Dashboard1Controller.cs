using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Msde.Mars.Business.Entities.Models;
using Msde.Mars.Repositories;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using System.IO;
using Microsoft.Extensions.Options;
using Msde.Mars.WebApi.Utility;
using System.Data;
using System.Threading;
using System.Data.SqlClient;
using System.Data.Common;
using Newtonsoft.Json.Linq;

namespace Msde.Mars.WebApi.Controllers
{

    [Route("api/[controller]")]
    [EnableCors("AllowSpecificOrigin")]
    public class Dashboard1Controller : Controller
    {

        /// <summary>
        /// 
        /// </summary>
        private OldMarsDatabase _ctx = null;

        /// <summary>
        /// 
        /// </summary>
        private readonly IOptions<Environment> _settings;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public Dashboard1Controller(OldMarsDatabase context, IOptions<Environment> settingsOptions)
        {
            _settings = settingsOptions;
            _ctx = context;
        }

        // GET api/values/5
        [HttpGet("{id}/{year}")]
        public object Get(string id, string year)
        {
            if (System.IO.File.Exists(_settings.Value.AppPath + @"\reports\" + id + "\\" + year + ".json"))
            {
                string allText = System.IO.File.ReadAllText(_settings.Value.AppPath + @"\reports\" + id + "\\" + year + ".json");
                object jsonObject = JsonConvert.DeserializeObject(allText);
                return jsonObject;
            }
            else
            {
                return null;
            }
        }

        [HttpGet("GetYears/{reportType}")]
        public async Task<List<string>> GetYears(string reportType)
        {
            List<string> files = new List<string>();
            DirectoryInfo dirInfo = new DirectoryInfo(_settings.Value.AppPath + @"\reports\" + reportType);
            if (dirInfo.Exists)
            {
                await Task.Run(() =>
                {
                    dirInfo.GetFiles().ToList().ForEach(t => files.Add(t.Name.Substring(0, t.Name.IndexOf(t.Extension))));
                });
            }
            return files.ToList<string>();
        }
//        EXEC @return_value = [dbo].[SP_Dashboard_2]

//        @BeginDate = N'7/1/2013',
//		@EndDate = N'6/30/2014',
//		@Domain = N'SM',
//		@AgencyIds = N'ALL',
//		@AllPaidClaims = 1,
//		@TotalDateRange = 1,
//		@Summary = 1,
//		@CFDAParameter = NULL,
//		@PCANumber = NULL,
//		@AgencyNum = NULL

//SELECT	'Return Value' = @return_value

//GO

        /// <summary>
        /// 
        /// </summary>
        /// <param name="year"></param>
        /// <returns></returns>
        [HttpGet("Dashboard1/{year}")]
        public async Task<List<Dashboard1>> Dashboard1(int year)
        {
            try
            {
                DbCommand cmd = _ctx.Database.GetDbConnection().CreateCommand();
                cmd.CommandText = "dbo.sp_Dashboard_1";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@Year", SqlDbType.Int) { Value = year });
                if (cmd.Connection.State != ConnectionState.Open)
                {
                    cmd.Connection.Open();
                }
                var userType = new List<Dashboard1>();
                var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    userType.Add(new Dashboard1()
                    {
                        ProgramName = reader[0].ToString(),
                        Description = reader[1].ToString(),
                        FundType = reader[2].ToString(),
                        Amount = reader[3].ToString(),
                        Percent = reader[4].ToString()

                    });
                }
                cmd.Connection.Close();
                JObject fedfunds = JObject.FromObject(new
                {
                        title = "Federal Funds at a Glance",
                        year = year,
                        status = "Saved",
                        date = DateTime.Now,
                        data =
                            from p in userType
                            orderby p.ProgramName
                            select new
                            {
                                title = p.Description,
                                reimbursement = p.Amount,
                                percentage = p.Percent,
                                graph = (p.Description.IndexOf("Funding") == -1)
                            }
                });

                using (StreamWriter file = System.IO.File.CreateText(_settings.Value.AppPath + @"\reports\FedFunds\" + year + ".json"))
                using (JsonTextWriter writer = new JsonTextWriter(file))
                {
                    fedfunds.WriteTo(writer);
                }
                return userType;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="year"></param>
        /// <returns></returns>
        [HttpGet("Dashboard2/{year}")]
        public async Task<List<Dashboard2>> Dashboard2(int year)
        {
            try
            {
                var beginYear = string.Format("7/1/{0}", (year -1).ToString());
                var endYear = string.Format("6/30/{0}", year.ToString());
                DbCommand cmd = _ctx.Database.GetDbConnection().CreateCommand();
                cmd.CommandText = "dbo.sp_Dashboard_2";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(new SqlParameter("@BeginDate", SqlDbType.VarChar) { Value = "7/1/2013" });
                cmd.Parameters.Add(new SqlParameter("@EndDate", SqlDbType.VarChar) { Value = "6/30/2014" });
                cmd.Parameters.Add(new SqlParameter("@Domain", SqlDbType.VarChar) { Value = "SM" });
                cmd.Parameters.Add(new SqlParameter("@AgencyIds", SqlDbType.VarChar) { Value = "All" });
                cmd.Parameters.Add(new SqlParameter("@AllPaidClaims", SqlDbType.Int) { Value = 1 });
                cmd.Parameters.Add(new SqlParameter("@TotalDateRange", SqlDbType.Int) { Value = 1 });
                cmd.Parameters.Add(new SqlParameter("@Summary", SqlDbType.Int) { Value = 1 });
                cmd.Parameters.Add(new SqlParameter("@CFDAParameter", SqlDbType.Int) { Value = DBNull.Value });
                cmd.Parameters.Add(new SqlParameter("@PCANumber", SqlDbType.Int) { Value = DBNull.Value });
                cmd.Parameters.Add(new SqlParameter("@AgencyNum", SqlDbType.Int) { Value = DBNull.Value });
                if (cmd.Connection.State != ConnectionState.Open)
                {
                    cmd.Connection.Open();
                }
                var userType = new List<Dashboard2>();
                var reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    userType.Add(new Dashboard2()
                    {
                        DomainYear = reader[0].ToString(),
                        AgencyNum = reader[1].ToString(),
                        AgencyId = reader[2].ToString(),
                        AgencyName = reader[3].ToString(),
                        CFDADescription = reader[4].ToString(),
                        CFDA = reader[5].ToString(),
                        ReimbursementTotal = reader[6].ToString()
                    });
                }
                cmd.Connection.Close();
                JObject fedfunds = JObject.FromObject(new
                {
                    title = "Maryland School Meals Program Funding",
                    year = year,
                    status = "saved",
                    date = DateTime.Now,
                    data =
                            from p in userType
                            orderby p.AgencyName
                            select new
                            {
                                DomainYear = p.DomainYear,
                                AgencyNum = p.AgencyNum,
                                AgencyId = p.AgencyId,
                                AgencyName = p.AgencyName,
                                CFDADescription = p.CFDADescription,
                                CFDA = p.CFDA,
                                ReimbursementTotal = p.ReimbursementTotal,
                                graph = true
                            }
                });

                using (StreamWriter file = System.IO.File.CreateText(_settings.Value.AppPath + @"\reports\SMFunding\" + year + ".json"))
                using (JsonTextWriter writer = new JsonTextWriter(file))
                {
                    fedfunds.WriteTo(writer);
                }
                return userType;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        [HttpPost]
        public void Post([FromBody]object value)
        {
            var myvalue = value;
        }

        // PUT api/values/5
        [HttpPut("{id}/{status}")]
        public void Put(string id, string status, [FromBody]object value)
        {
            JToken outer = JToken.Parse(value.ToString());
            JArray inner = outer["RawData"].Value<JArray>();
            JObject edit = outer["EditableData"].Value<JObject>();
            JArray data = edit["data"].Value<JArray>();
            JObject fedfunds = JObject.FromObject(new
            {
                title = edit.GetValue("title"),
                year = edit.GetValue("year"),
                status = status,
                date = DateTime.Now,
                data =
                            from p in data.ToList()
                            select new
                            {
                                title = p["title"],
                                reimbursement = p["re"],
                                percentage = p["percentage"],
                                graph = (p["title"].ToString().IndexOf("Funding") == -1)
                            }
            });

            using (StreamWriter file = System.IO.File.CreateText(_settings.Value.AppPath + @"\reports\" + id + "\\" + edit.GetValue("year") + ".json"))
            using (JsonTextWriter writer = new JsonTextWriter(file))
            {
                fedfunds.WriteTo(writer);
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
