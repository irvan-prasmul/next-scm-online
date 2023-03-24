import defaultClient from "@/globals/client";
import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import ArrowRightRounded from "@mui/icons-material/ArrowRightRounded";
import axios from "axios";
import moment from "moment";
import { formatFormData } from "../global";

export function getUserDataReservationDetails(payload) {
  const client = defaultClient();
  // const form = formatFormData(payload);
  return client.get("api/user/get-data-reservation-details", payload);

  // return mockRest1;
}

export function getUserModalTracking(payload) {
  const res = mockRest2;

  let tableColumns = [
    {
      number: "down",
      date: res.tracking_pjk[0].createdDate,
      info: "FPB Created",
      status: "-",
    },
  ];
  const track = res.tracking_pjk[0];
  const f_pjk = track.flag_pjk;
  const f_pjk_level = track.flag_pjk_level;
  const f_status = track.flag_status;
  const dateNow = moment.now();
  /////APPROVAL PJK/////
  if (
    f_status == "N" ||
    f_status == "A" ||
    f_status == "AP" ||
    f_status == "P" ||
    f_status == "F" ||
    f_status == "D"
  ) {
    //////REVIEWER PURCHASING//////////////
    if (track.flag_reviewer == "F") {
      tableColumns.push({
        number: "right",
        date: dateNow,
        info: "Review: Purchasing",
        status: "Waiting",
      });
    } else {
      tableColumns.push({
        number: "down",
        date: track.date_review,
        info: `Reviewer ${track.reviewer}`,
        status: "Done",
      });
      /////CHECKER///////
      if (track.flag_checker == "N") {
        tableColumns.push({
          number: "right",
          date: dateNow,
          info: "Checker: Checker",
          status: "Waiting",
        });
      } else {
        if (f_pjk == null || f_pjk == "N") {
          tableColumns.push({
            number: "",
            date: dateNow,
            info: `PJK: ${track.pjk_1}`,
            status: "Waiting",
          });
        }
        //////////APPROVAL PJB//////////
        else if (f_pjk == "A") {
          const track_pjb = res.tracking_pjb[0];
          const f_pjb = track_pjb.flag_pjb;
          const f_pjb_level = track_pjb.flag_pjb_level;
          const dateProcur = track_pjb.date_procurement;
          if (f_pjk_level == "1" || f_pjk_level == "2" || f_pjk_level == "3") {
            tableColumns.push({
              number: "down",
              date: track.date_appv_pjk1,
              info: `PJK: ${track.pjk_1}`,
              status: "Done",
            });
            if (f_pjk_level == "2" || f_pjk_level == "3") {
              tableColumns.push({
                number: "down",
                date: track.date_appv_pjk2,
                info: `PJK: ${track.pjk_2}`,
                status: "Done",
              });
            } else if (f_pjk_level == "3") {
              tableColumns.push({
                number: "down",
                date: track.date_appv_pjk3,
                info: `PJK: ${track.pjk_3}`,
                status: "Done",
              });
            }
            /////////APPROVAL PJB//////////
            if (f_pjb == "N") {
              tableColumns.push({
                number: "",
                date: dateNow,
                info: `PJB: ${track_pjb.pjb_1}`,
                status: "Waiting",
              });
            } else if (f_pjb == "A") {
              if (parseInt(f_pjb_level) >= 1) {
                tableColumns.push({
                  number: "down",
                  date: track_pjb.date_appv_pjb1,
                  info: `PJB: ${track_pjb.pjb_1}`,
                  status: "Done",
                });
                if (parseInt(f_pjb_level) >= 2) {
                  tableColumns.push({
                    number: "down",
                    date: track_pjb.date_appv_pjb2,
                    info: `PJB: ${track_pjb.pjb_2}`,
                    status: "Done",
                  });
                }
                if (parseInt(f_pjb_level) >= 3) {
                  tableColumns.push({
                    number: "down",
                    date: track_pjb.date_appv_pjb3,
                    info: `PJB: ${track_pjb.pjb_3}`,
                    status: "Done",
                  });
                }
                if (parseInt(f_pjb_level) >= 4) {
                  tableColumns.push({
                    number: "down",
                    date: track_pjb.date_appv_pjb4,
                    info: `PJB: ${track_pjb.pjb_4}`,
                    status: "Done",
                  });
                }
                if (f_pjb_level == "5") {
                  tableColumns.push({
                    number: "down",
                    date: track_pjb.date_appv_pjb5,
                    info: `PJB: ${track_pjb.pjb_5}`,
                    status: "Done",
                  });
                }
                if (f_status == "A") {
                  tableColumns.push({
                    number: "right",
                    date: dateNow,
                    info: `PROCUREMENT`,
                    status: "Waiting",
                  });
                } else if (
                  f_status == "AP" ||
                  f_status == "P" ||
                  f_status == "F" ||
                  f_status == "D"
                ) {
                  tableColumns.push({
                    number: "",
                    date: dateProcur,
                    info: `PROCUREMENT`,
                    status: "Done",
                  });
                }
              }
            } else if (f_pjb == "T") {
              tableColumns.push({
                number: "down",
                date: track_pjb.date_appv_pjb1,
                info: `PJB: ${track_pjb.pjb_1}`,
                status: "Done",
              });
              if (parseInt(f_pjb_level) >= 1) {
                tableColumns.push({
                  number: parseInt(f_pjb_level) >= 2 ? "down" : "right",
                  date: parseInt(f_pjb_level) >= 2 ? track_pjb.pjb_2 : dateNow,
                  info: `PJB: ${track_pjb.pjb_2}`,
                  status: parseInt(f_pjb_level) >= 2 ? "Done" : "Waiting",
                });
              }
              if (parseInt(f_pjb_level) >= 2) {
                tableColumns.push({
                  number: parseInt(f_pjb_level) >= 3 ? "down" : "right",
                  date: parseInt(f_pjb_level) >= 3 ? track_pjb.pjb_3 : dateNow,
                  info: `PJB: ${track_pjb.pjb_3}`,
                  status: parseInt(f_pjb_level) >= 3 ? "Done" : "Waiting",
                });
              }
              if (parseInt(f_pjb_level) >= 3) {
                tableColumns.push({
                  number: parseInt(f_pjb_level) >= 4 ? "down" : "right",
                  date: parseInt(f_pjb_level) >= 4 ? track_pjb.pjb_4 : dateNow,
                  info: `PJB: ${track_pjb.pjb_4}`,
                  status: parseInt(f_pjb_level) >= 4 ? "Done" : "Waiting",
                });
              }
              if (parseInt(f_pjb_level) >= 4) {
                tableColumns.push({
                  number: parseInt(f_pjb_level) >= 5 ? "down" : "right",
                  date: parseInt(f_pjb_level) >= 5 ? track_pjb.pjb_5 : dateNow,
                  info: `PJB: ${track_pjb.pjb_5}`,
                  status: parseInt(f_pjb_level) >= 5 ? "Done" : "Waiting",
                });
              }
            }
          }
        } else if (f_pjk == "T") {
          if (parseInt(f_pjk_level) >= 1) {
            tableColumns.push({
              number: "down",
              date: track.date_appv_pjk1,
              info: `PJK: ${track.pjk_1}`,
              status: "Done",
            });
            tableColumns.push({
              number: parseInt(f_pjk_level) >= 2 ? "down" : "right",
              date: parseInt(f_pjk_level) >= 2 ? track.date_appv_pjk2 : dateNow,
              info: `PJK: ${track.pjk_2}`,
              status: parseInt(f_pjk_level) >= 2 ? "Done" : "Waiting",
            });
          }
          if (parseInt(f_pjk_level) >= 2) {
            tableColumns.push({
              number: parseInt(f_pjk_level) >= 3 ? "down" : "right",
              date: parseInt(f_pjk_level) >= 3 ? track.date_appv_pjk3 : dateNow,
              info: `PJK: ${track.pjk_3}`,
              status: parseInt(f_pjk_level) >= 3 ? "Done" : "Waiting",
            });
          }
        }
      }
    }
  }
  //////////////////////

  return tableColumns;
}

const mockRest1 = {
  draw: "1",
  recordsTotal: 2,
  recordsFiltered: 2,
  data: [
    {
      control: "",
      totPrice: 2557476,
      dateCreated: "20-03-2023",
      requester: "Irvan Erdika",
      pta: null,
      io: "-",
      otherDoc: null,
      tracking: "C_user/get_modal_tracking/7436",
      qty_picking: "0",
      // s_wh: "<center><i class='fa fa-minus' style='color:grey;'></i></center>",
      // s_adm:
      //   "<center><i class='fa fa-hourglass-half' style='color:grey;'></i></center>",
      img: "assets/upload_img/14181679329373.png",
      x_f_ict: "Non-ICT",
      x_req_notes: "test information",
      x_ict_notes: null,
      x_purc_notes: null,
      number: "1",
      DT_RowId: "row_7436",
      idFpbDetail: "12174",
      idFpbHead: "7436",
      noFpb: "F23200194",
      noPo: null,
      materialName: "Fuel Filter",
      qty_pb: "12",
      qty_pickings: "0",
      qty_po: "12",
      uom: "UN",
      price: "213123",
      information: "test information",
      idCostCenter: "21206",
      costCenter: "SBE PPUK",
      planDate: "2023-04-28",
      picPurc: null,
      images: "14181679329373.png",
      notes: null,
      notes_po: null,
      exp_date: null,
      exp_date_po: null,
      receivedDateInv: null,
      receivedDatePo: null,
      status: "N",
      updateBy: null,
      roleName: null,
      company: "SBE",
      flag_picking: "F",
      flag_shipping: "F",
      flag_receipt: "F",
      flag_po: "T",
      flag_shipping_po: "F",
      flag_receipt_po: "F",
      flag_pjk: "N",
      flag_pjb: "N",
      flag_wh: "N",
      purc_notes: null,
      purchase_method: null,
      purc_type: null,
      flag_ict: "F",
      created_date: "2023-03-20 23:23:02",
      date_review_ict: null,
      date_appv_pjk: null,
      date_appv_pjb: null,
      date_appv_proc: null,
      date_appv_purc: null,
      flag_pjk_head: null,
      initial_pjk: null,
      initial_pjb: null,
      requesterName: "Irvan Erdika",
      idJenisKeg: "2",
      doc_pta: null,
      doc_io: null,
      doc_other: null,
      ict_notes: null,
      flag_purc_review: "F",
    },
    {
      control: "",
      totPrice: 1199999999988,
      dateCreated: "14-03-2023",
      requester: "Irvan Erdika",
      pta: "assets/upload_img/pta/14181679251289.png",
      io: null,
      otherDoc: null,
      tracking: "C_user/get_modal_tracking/7435",
      qty_picking: "0",
      // s_wh: "<center><i class='fa fa-minus' style='color:grey;'></i></center>",
      // s_adm:
      //   "<center><i class='fa fa-hourglass-half' style='color:grey;'></i></center>",
      img: null,
      x_f_ict: "Non-ICT",
      x_req_notes: "",
      x_ict_notes: null,
      x_purc_notes: null,
      number: 2,
      DT_RowId: "row_7435",
      idFpbDetail: "12173",
      idFpbHead: "7435",
      noFpb: "F23100650",
      noPo: null,
      materialName: " C Clamp Woodworking",
      qty_pb: "12",
      qty_pickings: "0",
      qty_po: "12",
      uom: "UN",
      price: "99999999999",
      information: "",
      idCostCenter: "26201",
      costCenter: "SBE BVDI",
      planDate: "2023-03-30",
      picPurc: null,
      images: null,
      notes: null,
      notes_po: null,
      exp_date: null,
      exp_date_po: null,
      receivedDateInv: null,
      receivedDatePo: null,
      status: "N",
      updateBy: null,
      roleName: null,
      company: "SBE",
      flag_picking: "F",
      flag_shipping: "F",
      flag_receipt: "F",
      flag_po: "T",
      flag_shipping_po: "F",
      flag_receipt_po: "F",
      flag_pjk: "N",
      flag_pjb: "N",
      flag_wh: "N",
      purc_notes: null,
      purchase_method: null,
      purc_type: null,
      flag_ict: "F",
      created_date: "2023-03-14 14:50:53",
      date_review_ict: null,
      date_appv_pjk: null,
      date_appv_pjb: null,
      date_appv_proc: null,
      date_appv_purc: null,
      flag_pjk_head: null,
      initial_pjk: null,
      initial_pjb: null,
      requesterName: "Irvan Erdika",
      idJenisKeg: "1",
      doc_pta: null,
      doc_io: null,
      doc_other: null,
      ict_notes: null,
      flag_purc_review: "F",
    },
  ],
};

const mockRest2 = {
  tracking_pjk: [
    {
      idUser: "1360",
      createdDate: "2023-02-24 14:11:02",
      flag_status: "F",
      noFpb: "F23100577",
      flag_pjk: "A",
      flag_pjk_level: "1",
      pjk_1: "Ida Juda",
      pjk_2: null,
      pjk_3: null,
      date_appv_pjk1: null,
      date_appv_pjk2: null,
      date_appv_pjk3: null,
      flag_pjb: "A",
      flag_pjb_level: "1",
      flag_procurement: "A",
      flag_reviewer: "T",
      flag_checker: "F",
      date_review: "2023-02-27 06:47:55",
      date_checker: "2023-02-27 06:47:55",
      reviewer: "DIL",
      checker: "V. Febi Amalia",
    },
  ],
  tracking_pjb: [
    {
      flag_status: "F",
      flag_pjb: "A",
      flag_pjb_level: "1",
      company: "UNI",
      pjb_1: "Djoko Wintoro",
      pjb_2: "Djisman Simandjuntak",
      pjb_3: "Prasasto Sudyatmiko",
      pjb_4: null,
      pjb_5: null,
      date_appv_pjb1: null,
      date_appv_pjb2: null,
      date_appv_pjb3: null,
      date_appv_pjb4: null,
      date_appv_pjb5: null,
      date_procurement: "2023-03-03 11:10:20",
    },
  ],
  max_pjkLevel: "1",
  max_pjbLevel: "3",
};
/*
{
  tracking_pjk: [
    {
      idUser: "1360",
      createdDate: "2023-03-21 09:25:08",
      flag_status: "F",
      noFpb: "F23100651",
      flag_pjk: "A",
      flag_pjk_level: "1",
      pjk_1: "Ida Juda",
      pjk_2: null,
      pjk_3: null,
      date_appv_pjk1: "2023-03-21 03:35:48",
      date_appv_pjk2: null,
      date_appv_pjk3: null,
      flag_pjb: "A",
      flag_pjb_level: "1",
      flag_procurement: "A",
      flag_reviewer: "T",
      flag_checker: "F",
      date_review: "2023-03-21 03:33:31",
      date_checker: "2023-03-21 03:33:31",
      reviewer: "PNK",
      checker: "V. Febi Amalia",
    },
  ],
  tracking_pjb: [
    {
      flag_status: "F",
      flag_pjb: "A",
      flag_pjb_level: "1",
      company: "UNI",
      pjb_1: "Djoko Wintoro",
      pjb_2: "Djisman Simandjuntak",
      pjb_3: "Prasasto Sudyatmiko",
      pjb_4: null,
      pjb_5: null,
      date_appv_pjb1: "2023-03-21 03:36:36",
      date_appv_pjb2: null,
      date_appv_pjb3: null,
      date_appv_pjb4: null,
      date_appv_pjb5: null,
      date_procurement: "2023-03-21 09:37:41",
    },
  ],
  max_pjkLevel: "1",
  max_pjbLevel: "3",
};
*/
