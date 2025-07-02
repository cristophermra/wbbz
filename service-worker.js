const t = "popup.js";
const e = "content.js";
const n = "background.js";
const s = "MSG_SEND_MESSAGE";
const a = "MSG_FORWARD_MY_LAST_MST";
const o = "MSG_MESSAGE_RESULTS";
const c = "MSG_RUN_FILTER";
const r = "MSG_PAUSE";
const i = "MSG_RESUME";
const u = "MSG_STOP";
const f = "MSG_CANCEL_OPERATION";
const l = "MSG_SETUP_BATCH";
const _ = "MSG_GET_MESSAGE_RESULTS";
const E = "MSG_GET_USER_PHONENUMBER";
const S = "MSG_SHOW_WHATSAPP_TAB";
const T = "MSG_GET_PAGE_URL";
const A = "MSG_SELECT_IMAGE";
const N = "MSG_OPEN_MY_MSG_WINDOW";
const m = "MSG_IS_MY_CHAT_WINDOW";
const I = "MSG_GET_FORWARD_IMAGE_PATH";
const g = "MSG_ADD_PROFILE_PICTURE";
const M = "MSG_GET_IMAGE_COUNT";
const h = "MSG_SET_USER_PHONENUMBER";
const d = "MSG_RELOAD_ATTACHMENT";
const G = "MSG_RELOAD_ATTACHMENT_RESULT";
const O = "MSG_GET_NUMBER_ON_CURRENT_WINDOW";
const p = "MSG_UPDATE_TEMPLATES";
const D = "MSG_REGISTER_WEB_WHATSAPP_TAB";
const U = "MSG_UNREGISTER_WEB_WHATSAPP_TAB";
const C = "MSG_NEXT_MESSAGE_IN_TIME";
const L = "MSG_VALIDATE_NUMBER";
const R = "MSG_SKIP_LINK_PREVIEW";
const P = "MSG_CLEAR_PROGRESS";
const y = "OPERATION_NONE";
const b = "OPERATION_SEND_MESSAGE";
const B = "OPERATION_FILTER";
const w = "STATUS_SENT";
const v = "STATUS_FAILED";
const H = "STATUS_PENDING";
const Y = "STATUS_SKIPPED";
const K = "SET_ACTIVE_WHATSAPP_TAB";
const F = "MSG_LIB_GET_LOGGEDIN_USER";
const k = "MSG_ENABLE_BLUR_RECENT_MSGS";
const x = "MSG_DISABLE_BLUR_RECENT_MSGS";
const j = "MSG_ENABLE_BLUR_CONTACT_NUMS";
const J = "MSG_DISABLE_BLUR_CONTACT_NUMS";
const W = "MSG_ENABLE_BLUR_PROFILE_PICS";
const X = "MSG_DISABLE_BLUR_PROFILE_PICS";
const z = "MSG_ENABLE_BLUR_CONTACT_MSGS";
const V = "MSG_DISABLE_BLUR_CONTACT_MSGS";
const Z = "MSG_ENABLE_HIGHLIGHT_ONLINE_CONTACTS";
const q = "MSG_DISABLE_HIGHLIGHT_ONLINE_CONTACTS";
const Q = "MSG_ENABLE_NOTIFY_ONLINE_CONTACTS";
const tt = "MSG_DISABLE_NOTIFY_ONLINE_CONTACTS";
const et = "MSG_ENABLE_PLAY_AUDIO_MSGS_WITHOUT_INFO_SENDER";
const nt = "MSG_DISABLE_PLAY_AUDIO_MSGS_WITHOUT_INFO_SENDER";
const st = "MSG_ENABLE_HIDE_ONLINE_STATUS";
const at = "MSG_DISABLE_HIDE_ONLINE_STATUS";
const ot = "MSG_ENABLE_RESTORE_MESSAGES";
const ct = "MSG_DISABLE_RESTORE_MESSAGES";
const rt = "MSG_PIN_UNREAD_CHATS";
const it = "MSG_LIB_UNPIN_UNREAD_CHATS";
const ut = "MSG_LIB_ENABLE_READ_RECIEPT";
const ft = "MSG_LIB_DISABLE_READ_RECIEPT";
const lt = "MSG_LIB_ENABLE_TYPING_STATE";
const _t = "MSG_LIB_DISABLE_TYPING_STATE";
const Et = "MSG_ENABLE_LIKE_BUTTON";
const St = "MSG_DISABLE_LIKE_BUTTON";
const Tt = "MSG_ENABLE_REACTIONS";
const At = "MSG_DISABLE_REACTIONS";
const Nt = "MSG_LIB_DOWNLOAD_CONTACTS";
const mt = "MSG_LIB_GET_CONTACTS";
const It = "MSG_LIB_GET_USER_GROUPS";
const gt = "MSG_LIB_GET_USER_LABELS";
const Mt = "MSG_LIB_GET_USER_BROADCASTS";
const ht = "MSG_SET_ATTACHMENTS";
const dt = "MSG_CLEAR_ATTACHMENTS";
const Gt = "MSG_GET_ATTACHMENT";
const Ot = "MSG_CACHE_ATTACHMENT_BACKGROUND";
const pt = "MSG_GET_ATTACHMENT_BACKGROUND";
const Dt = "MSG_SEND_ATTACHMENTS_WITH_CAPTION";
const Ut = "MSG_SEND_ATTACHMENTS_WITHOUT_CAPTION";
const Ct = "MSG_UPDATE_CHATBOT_CONFIG";
const Lt = "MSG_DOWNLOAD_CHATS";
const Rt = "MSG_IS_CHATS_DOWNLOADING";
const Pt = "MSG_DOWNLOAD_CHATS_FINISHED";
const yt = "MSG_CREATE_GROUP";
const bt = "MSG_GET_CREATE_GROUP_STATUS";
const Bt = "MSG_RESET_CREATE_GROUP_STATUS";

function wt() {
    return new Promise((t => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (function(e) {
            t(e[0].id)
        }))
    }))
}

function vt(t) {
    console.log(t);
    return wt().then((e => Ht(t, e)))
}

function Ht(t, e) {
    return new Promise(((n, s) => {
        if (e < 0) {} else {
            chrome.tabs.sendMessage(e, t, (function(t) {
                console.log(t, chrome.runtime.lastError);
                if (chrome.runtime.lastError) {
                    s(chrome.runtime.lastError)
                }
                n(t)
            }))
        }
    }))
}

function Yt(t) {
    return new Promise(((e, n) => {
        try {
            chrome.runtime.sendMessage(t, (t => {
                e(t)
            }))
        } catch (t) {
            n(t)
        }
    }))
}

function Kt(t) {
    chrome.runtime.sendMessage({
        from: "content",
        subject: "load-popup",
        html: t
    })
}

function $t() {
    const t = "https://us-central1-waplugin-34798.cloudfunctions.net";
    const e = `${t}/logLogin`;
    const n = `${t}/logInstalls`;
    const s = `${t}/logRevists`;
    const a = `${t}/logSingleMsgs`;
    const o = `${t}/logBulkMsgs`;
    const c = `${t}/logLoginFailed`;
    const r = `${t}/stats/singlemsg`;
    const i = `${t}/stats/bulkmsg`;
    const u = `${t}/stats/user`;
    const f = `${t}/stats/pro`;
    const l = `${t}/stats/ispro`;
    const _ = `${t}/stats/templates`;
    const E = `${t}/stats/adds`;
    const S = `${t}/stats/reports`;
    const T = `${t}/stats/file`;
    const A = `${t}/stats/help-number`;
    const N = `${t}/stats/demo-url`;
    const m = `${t}/stats/help-info`;
    const I = `${t}/stats/getlicense`;
    const g = `${t}/help`;
    async function M(t) {
        const e = await fetch(`${I}?phonenumber=${encodeURI(t)}`);
        const n = await e.json();
        if (n && n.licensedetails) {
            return n.licensedetails
        }
    }
    async function h(t, e, n) {
        await fetch(r, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                message: e,
                phoneNumber: n,
                userid: t
            })
        })
    }
    async function d(t, e, n) {
        await fetch(i, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                message: e,
                phoneNumbers: n,
                userid: t
            })
        })
    }
    async function G(t) {
        await fetch(`${n}?refid=${t}`)
    }
    async function O(t, e) {
        await fetch(`${s}?name=${encodeURI(t)}&userid=${encodeURI(e)}`)
    }
    async function p(t) {
        await fetch(`${a}?userid=${t}`)
    }
    async function D(t) {
        await fetch(`${o}?userid=${t}`)
    }
    async function U(t, n, s) {
        await fetch(`${e}?name=${encodeURI(n)}&phonenumber=${encodeURI(t)}&refid=${encodeURI(s)}`)
    }
    async function C(t) {
        await fetch(`${c}?phonenumber=${encodeURI(t)}`)
    }
    async function L(t) {
        const e = await fetch(`${u}?authid=${encodeURI(t)}`);
        const n = await e.json();
        return n
    }
    async function R(t) {
        const e = await fetch(`${f}?authid=${encodeURI(t)}`);
        const n = await e.json();
        return n
    }

    function P(t) {
        return new Promise(((e, n) => {
            $.get(`${l}?authid=${encodeURI(t)}`, (function(t) {
                e(t)
            })).fail((function() {
                n()
            }))
        }))
    }
    async function y(t, e) {
        await fetch(_, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                templates: e,
                authid: t
            })
        })
    }
    async function b(t) {
        return []
    }
    async function B(t, e) {
        await fetch(S, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                report: e,
                phoneNumber: t
            })
        })
    }
    async function w(t) {
        const e = await fetch(`${S}?authid=${encodeURI(t)}`);
        const n = await e.json();
        return n
    }
    async function v(t) {
        const e = await fetch(`${T}?path=${encodeURI(t)}`);
        const n = await e.json();
        return n
    }
    async function H(t) {
        const e = await fetch(E, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify({
                authid: t
            })
        });
        return e.json()
    }
    async function Y(t, e, n, s, a, o) {
        const c = await fetch(g + "?" + new URLSearchParams({
            name: t,
            phonenumber: e,
            issuetype: n,
            issuedetails: s,
            version: a,
            ispro: o
        }), {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer"
        });
        const r = await c.text();
        return r
    }

    function K() {
        return new Promise(((t, e) => {
            $.get(A, (function(e) {
                t(e)
            })).fail((function() {
                e()
            }))
        }))
    }

    function F() {
        return new Promise(((t, e) => {
            $.get(m, (function(e) {
                let n = null;
                if (e) {
                    n = JSON.parse(e)
                }
                t(n)
            })).fail((function() {
                e()
            }))
        }))
    }

    function k() {
        return new Promise(((t, e) => {
            $.get(N, (function(e) {
                t(e)
            })).fail((function() {
                e()
            }))
        }))
    }
    return {
        logInstalls: G,
        logRevisits: O,
        logSingleMsgs: p,
        logBulkMsgs: D,
        logLogin: U,
        logLoginFailed: C,
        logSingleMsgDetail: h,
        logBulkMessageDetail: d,
        getUser: L,
        getUserPro: R,
        getIsPro: P,
        saveTemplates: y,
        getTemplates: b,
        logAdds: H,
        saveReports: B,
        getReports: w,
        getFile: v,
        getHelpNumber: K,
        getDemoUrl: k,
        getLicensce: M,
        getHelp: Y,
        getHelpInfo: F
    }
}
const Ft = "KEY_AUTHID";
const kt = "KEY_ACTIVE_TAB";
const xt = "KEY_INSTALL_TIMESTAMP";
const jt = "KEY_PHONE_NUMBERS_BULK";
const Jt = "KEY_CURRENT_MSG_BULK";
const Wt = "KEY_AUTH_PHONENUMBER";
const Xt = "KEY_AUTH_NAME";
const zt = "KEY_IS_AUTHORIZED";
const Vt = "KEY_BULK_MSG_COUNTRYCODE";
const Zt = "KEY_REF_ID";
const qt = "KEY_IS_PRO";
const Qt = "KEY_PHONE_CLUMN_NUMBER";
const te = "KEY_CSV_FILE_DATA";
const ee = "KEY_FILE_NAME";
const ne = "KEY_SHEET_NAME";
const se = "KEY_ACTIVE_SHEET";
const ae = "KEY_EXTRAS";
const oe = "KEY_PHONE_COLUMN_NAME";
const ce = "KEY_EXCEL_FILE_DATA";
const re = "KEY_START_INDEX";
const ie = "KEY_FINAL_INDEX";
const ue = "KEY_COUNTRY_ISO2_CODE";
const fe = "KEY_DEFAULT_COUNTRY_CODE";
const le = "KEY_INVALID_NUMBER_COUNT";
const _e = "KEY_TEMPLATES";
const Ee = "KEY_TEMPLATES_UI_DATA";
const Se = "KEY_SPAM_METER_UI_DATA";
const Te = "KEY_LAST_CHAT_DATETIME";
const Ae = "KEY_SEND_MESSAGE_UI_DATA";
const Ne = "KEY_HELP_TAB_UI_DATA";
const me = "KEY_ALERT_UI_DATA";
const Ie = "KEY_SETTINGS_TAB_UI_DATA";
const ge = "KEY_CONTACT_TAB_UI_DATA";
const Me = "KEY_NEXT_BATCH_TIMEOUT";
const he = "KEY_ALL_PHONENUMBERS";
const de = "KEY_ALL_MESSAGES";
const Ge = "KEY_IS_ATTACHMENT";
const Oe = "KEY_MSG_GAP";
const pe = "KEY_BATCH_GAP";
const De = "KEY_BATCH_SIZE";
const Ue = "KEY_RANDOMIZE_DELAY";
const Ce = "KEY_NEXT_BATCH_INDEX";
const Le = "KEY_NEXT_BATCH_PHONE_NUMBERS";
const Re = "KEY_NEXT_BATCH_MSGS";
const Pe = "KEY_MSG_STATUS";
const ye = "KEY_PAUSED_INDEX";
const be = "KEY_MSG_GAP_TIMEOUT";
const Be = "KEY_MSG_GAP_RESOLVE";
const we = "KEY_CURRENT_OPRETION";
const ve = "KEY_IS_PAUSED";
const He = "KEY_IS_FINISHED";
const Ye = "KEY_NEXT_MSG_TIMER";
const Ke = "KEY_SKIP_LINK_PREVIEW_FLAG";
const $e = "KEY_TIME_LEFT_FOR_NEXT_SHOOT";
const Fe = "KEY_PIN_UNREAD_CHATS";
const ke = "KEY_ENABLE_PRESENCE";
const xe = "KEY_ATTACHMENTS_SETTINGS_DATA";
const je = "KEY_CHATBOT_CONFIG_DATA";
const Je = "KEY_IS_OPERATION_RUNNING";
const We = "KEY_HELP_CTA";

function Xe() {
    function t(t, e) {
        return new Promise(((n, s) => {
            const a = {};
            a[t] = e;
            chrome.storage.local.set(a, (function() {
                n()
            }))
        }))
    }

    function e(t) {
        return new Promise(((e, n) => {
            chrome.storage.local.get(t, (function(n) {
                e(n[t])
            }))
        }))
    }

    function n(e) {
        const n = e ? "true" : "false";
        return t(qt, n)
    }
    async function s() {
        const t = await e(qt);
        return t === "true" ? true : false
    }

    function a(e) {
        return t(jt, JSON.stringify(e))
    }
    async function o() {
        const t = await e(jt);
        if (t) {
            return JSON.parse(t)
        } else return []
    }

    function c(e) {
        return t(Jt, e)
    }
    async function r() {
        let t = "";
        const n = await e(Jt);
        if (n) {
            t = n
        }
        return t
    }

    function i(e) {
        return t(kt, e)
    }

    function u() {
        return e(kt)
    }

    function f(e) {
        return t(ue, e)
    }

    function l() {
        return e(ue)
    }

    function _(e) {
        return t(fe, e)
    }

    function E() {
        return e(fe)
    }

    function S(e) {
        return t(Vt, e)
    }

    function T() {
        return e(Vt)
    }

    function A() {
        return t(xt, `${Date.now()}`)
    }

    function N() {
        return e(xt)
    }

    function m() {
        return e(Ft)
    }

    function I(e) {
        return t(Ft, e)
    }

    function g() {
        return e(Wt)
    }

    function M(e) {
        return t(Wt, e)
    }

    function h() {
        return e(Xt)
    }

    function d(e) {
        return t(Xt, e)
    }

    function G() {
        return e(Zt)
    }

    function O(e) {
        return t(Zt, e)
    }
    async function p() {
        let t = null;
        const n = await e(ce);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }

    function D(e) {
        return t(ce, JSON.stringify(e))
    }
    async function U() {
        let t = 0;
        const n = await e(le);
        if (n) {
            t = parseInt(n, 10)
        }
        return t
    }

    function C(e) {
        return t(le, `${e}`)
    }
    async function L() {
        let t = null;
        const n = await e(ae);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function R() {
        let t = "";
        const n = await e(oe);
        if (n) {
            t = n
        }
        return t
    }

    function P(e) {
        return t(oe, `${e}`)
    }

    function y() {
        return e(ee)
    }

    function b(e) {
        return t(ee, e)
    }

    function B() {
        return e(ne)
    }

    function w(e) {
        return t(ne, e)
    }

    function v() {
        return e(se)
    }

    function H(e) {
        return t(se, e)
    }

    function Y() {
        return e(re)
    }

    function K(e) {
        return t(re, e)
    }

    function $() {
        return e(ie)
    }

    function F(e) {
        return t(ie, e)
    }
    async function k() {
        let t = [];
        const n = await e(_e);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function x(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(_e, n)
    }
    async function j(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(ae, n)
    }
    async function J() {
        let t = {};
        const n = await e(Ee);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function W(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(Ee, n)
    }
    async function X() {
        let t = {};
        const n = await e(Se);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function z(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(Se, n)
    }
    async function V(e) {
        return t(Te, e)
    }
    async function Z() {
        return e(Te)
    }
    async function q() {
        let t = {};
        const n = await e(Ae);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function Q(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(Ae, n)
    }
    async function tt() {
        let t = {};
        const n = await e(Ne);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function et(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(Ne, n)
    }
    async function nt() {
        let t = {};
        const n = await e(me);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function st(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(me, n)
    }
    async function at() {
        let t = {};
        const n = await e(Ie);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function ot(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(Ie, n)
    }
    async function ct() {
        let t = {};
        const n = await e(ge);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function rt(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(ge, n)
    }
    async function it() {
        let t = {};
        const n = await e(xe);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function ut(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(xe, n)
    }
    async function ft() {
        let t = {};
        const n = await e(je);
        if (n) {
            t = JSON.parse(n)
        }
        return t
    }
    async function lt(e) {
        let n = "";
        if (e) {
            n = JSON.stringify(e)
        }
        return t(je, n)
    }

    function _t(e) {
        return t(Me, e)
    }

    function Et() {
        return e(Me)
    }

    function St(e) {
        return t(he, e)
    }

    function Tt() {
        return e(he)
    }

    function At(e) {
        return t(de, e)
    }

    function Nt() {
        return e(de)
    }

    function mt(e) {
        return t(Ge, e)
    }

    function It() {
        return e(Ge)
    }

    function gt(e) {
        return t(Oe, e)
    }

    function Mt() {
        return e(Oe)
    }

    function ht(e) {
        return t(pe, e)
    }

    function dt() {
        return e(pe)
    }

    function Gt(e) {
        return t(De, e)
    }

    function Ot() {
        return e(De)
    }

    function pt(e) {
        return t(Ue, e)
    }

    function Dt() {
        return e(Ue)
    }

    function Ut(e) {
        return t(Ce, e)
    }

    function Ct() {
        return e(Ce)
    }

    function Lt(e) {
        return t(Le, e)
    }

    function Rt() {
        return e(Le)
    }

    function Pt(e) {
        return t(Re, e)
    }

    function yt() {
        return e(Re)
    }

    function bt(e) {
        return t(Pe, e)
    }

    function Bt() {
        return e(Pe)
    }

    function wt(e) {
        return t(ye, e)
    }

    function vt() {
        return e(ye)
    }

    function Ht(e) {
        return t(be, e)
    }

    function Yt() {
        return e(be)
    }

    function Kt(e) {
        return t(Be, e)
    }

    function $t() {
        return e(Be)
    }

    function zt(e) {
        return t(we, e)
    }

    function Qt() {
        return e(we)
    }

    function te(e) {
        return t(ve, e)
    }

    function Fe() {
        return e(ve)
    }

    function Xe(e) {
        return t(He, e)
    }

    function ze() {
        return e(He)
    }

    function Ve(e) {
        return t(Ye, e)
    }

    function Ze() {
        return e(Ye)
    }

    function qe(e) {
        return t(Ke, e)
    }

    function Qe() {
        return e(Ke)
    }

    function tn(e) {
        return t($e, e)
    }

    function en() {
        return e($e)
    }

    function nn(e) {
        return t(ke, e)
    }

    function sn() {
        return e(ke)
    }

    function an(e) {
        return t(Je, e)
    }

    function on() {
        return e(Je)
    }
    async function cn() {
        const t = await L();
        if (t && t[We]) {
            return t[We]
        }
    }
    return {
        getHelpCTA: cn,
        saveIsOperationRunning: an,
        getIsOperationRunning: on,
        getPhoneNumbersBulk: o,
        saveCurrentMessageBulk: c,
        savePhoneNumbersBulk: a,
        getCurrentMessageBulk: r,
        getActiveTab: u,
        saveActiveTab: i,
        saveBulkMsgCountryCode: S,
        getBulkMsgCountryCode: T,
        getInstallTimeStamp: N,
        setInstallTimeStamp: A,
        getAuthId: m,
        saveAuthId: I,
        getAuthName: h,
        saveAuthName: d,
        getAuthPhoneNumber: g,
        saveAuthPhoneNumber: M,
        getRefID: G,
        saveRefID: O,
        setIsPro: n,
        getIsPro: s,
        getExcelFileData: p,
        saveExcelFileData: D,
        getPhoneColumnName: R,
        savePhoneColumnName: P,
        getFileName: y,
        saveFileName: b,
        getSheetName: B,
        saveSheetName: w,
        getActiveSheet: v,
        saveActiveSheet: H,
        getStartIndex: Y,
        saveStartIndex: K,
        getFinalIndex: $,
        saveFinalIndex: F,
        getExtras: L,
        saveISO2CountryCode: f,
        getISO2CountryCode: l,
        saveDefaultCountryCode: _,
        getDefaultCountryCode: E,
        saveInvalidNumberCount: C,
        getInvalidNumberCount: U,
        getTemplates: k,
        saveTemplates: x,
        getTemplatesUIData: J,
        saveTemplatesUIData: W,
        getSpamMeterUIData: X,
        saveSpamMeterUIData: z,
        saveAdds: j,
        saveLastChatDateTime: V,
        getLastChatDateTime: Z,
        getSendMessageUIData: q,
        saveSendMessageUIData: Q,
        getAlertUIData: nt,
        saveAlertUIData: st,
        saveNextBatchTimeOut: _t,
        getNextBatchTimeOut: Et,
        saveAllPhoneNumbers: St,
        getAllPhoneNumbers: Tt,
        saveAllMessages: At,
        getAllMessages: Nt,
        saveIsAttachment: mt,
        getIsAttachment: It,
        saveMessageGap: gt,
        getMessageGap: Mt,
        saveBatchGap: ht,
        getBatchGap: dt,
        saveBatchSize: Gt,
        getBatchSize: Ot,
        saveRandomizeDelay: pt,
        getRandomizeDelay: Dt,
        saveNextBatchIndex: Ut,
        getNextBatchIndex: Ct,
        saveNextBatchPhoneNumbers: Lt,
        getNextBatchPhoneNumbers: Rt,
        saveNextBatchMessages: Pt,
        getNextBatchMessages: yt,
        saveMessageStatus: bt,
        getMessageStatus: Bt,
        savePausedIndex: wt,
        getPausedIndex: vt,
        saveMessageGapTimeout: Ht,
        getMessageGapTimeout: Yt,
        saveMessageGapResolve: Kt,
        getMessageGapResolve: $t,
        saveCurrentOperation: zt,
        getCurrentOperation: Qt,
        saveIsPaused: te,
        getIsPaused: Fe,
        saveIsFinished: Xe,
        getIsFinished: ze,
        saveNextMessageTimer: Ve,
        getNextMessageTimer: Ze,
        saveSkipLinkPreviewFlag: qe,
        getSkipLinkPreviewFlag: Qe,
        saveTimeLeftForNextShoot: tn,
        getTimeLeftForNextShoot: en,
        saveEnablePresence: nn,
        getEnablePresence: sn,
        getSettingsTabUIData: at,
        saveSettingsTabUIData: ot,
        getContactTabUIData: ct,
        saveContactTabUIData: rt,
        getAttachmentsSettings: it,
        saveAttachmentsSettings: ut,
        loadChatbotCOnfig: ft,
        saveChatbotConfig: lt,
        getHelpTabUIData: tt,
        saveHelpTabUIData: et
    }
}

function ze() {
    const t = 60 * 1e3;
    let e = "";
    let a = [];
    let c = [];
    let r = false;
    let i = 0;
    let u = 0;
    let f = 0;
    let l = 0;
    let _ = false;
    let E = null;
    let S = y;
    let T = false;
    let A = true;
    let N = 0;
    let m = -1;
    let I = [];
    let g = [];
    let M = [];
    let h = it();
    let d = null;
    let G = null;
    let O = false;
    let p;
    let D = false;
    let U = false;
    let R = null;

    function v() {}
    async function Y(t, n) {
        $();
        S = n;
        e = t.fileName ? t.fileName : "";
        a = t.numbers ? t.numbers : [];
        c = t.messages ? t.messages : a.map((t => ""));
        r = t.attachment ? t.attachment : false;
        i = t.messageGap ? t.messageGap : 0;
        _ = t.randomizeDelay ? t.randomizeDelay : false;
        u = t.batchGap ? t.batchGap : 0;
        f = t.batchSize ? t.batchSize : a.length;
        D = t.isCaption ? t.isCaption : false;
        U = t.isPro;
        R = t.contact;
        M = [];
        a.forEach((t => M.push(H)));
        let s = t.startTime ? t.startTime : Date.now();
        l = s;
        v();
        K(s)
    }

    function K(t) {
        if (m < 0) {
            m = 0
        } else {
            m = m + 1
        }
        if (f > 0) {
            I = a.slice(m * f, (m + 1) * f);
            g = c.slice(m * f, (m + 1) * f)
        }
        if (t) {
            t = t - Date.now();
            if (t < 0) {
                t = 0
            }
        } else {
            t = 0
        }
        if (I && I.length > 0) {
            E = setTimeout((function() {
                E = null;
                W()
            }), t)
        } else {
            A = true;
            V();
            h.cancel();
            rt()
        }
    }

    function $() {
        j();
        h.cancel();
        F();
        k();
        x();
        rt()
    }

    function F() {
        a = [];
        c = [];
        M = [];
        r = false;
        D = false;
        i = 0;
        u = 0;
        f = 0;
        T = false;
        A = false;
        U = false;
        S = y;
        O = false;
        R = null
    }

    function k() {
        m = -1;
        I = [];
        g = []
    }

    function x() {
        if (d) {
            clearTimeout(d);
            d = null
        }
        if (G) {
            G();
            G = null
        }
    }

    function j() {
        if (E) {
            clearTimeout(E);
            N = 0
        }
        E = null
    }

    function J() {
        let t = true;
        if (M.filter((t => t === w)).length > 2) {
            if ((r || R) && !U) {
                t = false
            }
        }
        return t
    }
    async function W(t = 0, e = 0) {
        N = t;
        for (let n = t; n < I.length; ++n) {
            await X(e);
            e = 0;
            if (en !== qe && !T) {
                if (I.length > n) {
                    try {
                        if (J()) {
                            const t = await z(I[n], g[n], r, D);
                            M[m * f + n] = t
                        } else {
                            nt()
                        }
                    } catch (t) {
                        nt();
                        break
                    }
                    V();
                    N = n + 1
                }
            } else {
                nt();
                break
            }
        }
        if (!T) {
            const t = Z();
            h.set(Date.now() + t);
            K(Date.now() + t)
        }
    }

    function X(t) {
        return new Promise(((e, n) => {
            let s;
            if (t !== 0) {
                s = t
            } else {
                s = q()
            }
            h.set(Date.now() + s);
            d = setTimeout((() => {
                d = null;
                G = null;
                e()
            }), s);
            G = e
        }))
    }

    function z(t, e, a, o) {
        h.cancel();
        if (S === b) {
            return Ht({
                from: n,
                subject: s,
                data: {
                    message: e,
                    number: t,
                    isAttachment: a,
                    isCaption: o,
                    skipLinkPreview: O,
                    contact: R
                }
            }, en)
        } else if (S === B) {
            return Ht({
                from: n,
                subject: L,
                data: {
                    number: t
                }
            }, en)
        }
    }

    function V() {
        Yt({
            from: n,
            subject: o,
            data: Q()
        })
    }

    function Z() {
        return u * t
    }

    function q() {
        let t = 0;
        if (_ && Math.random() < .5) {
            t = i * 1e3 / 2
        } else {
            t = i * 1e3
        }
        return t
    }

    function Q() {
        return h.getUpdateData()
    }

    function tt() {
        if (N === f) {
            return m * f
        } else {
            return m * f + N
        }
    }

    function et() {
        return {
            isFinished: A,
            operation: S,
            isPaused: T,
            numbers: a,
            messages: c,
            status: M,
            nextMessageIndex: tt(),
            isPro: U,
            isAttachment: r,
            contact: R
        }
    }

    function nt() {
        if (S !== "OPERATION_NONE" && M.filter((t => t === "STATUS_PENDING")).length > 0) {
            if (!T) {
                T = true;
                p = h.getTimeLeftForNextShoot();
                x();
                j();
                V();
                h.cancel();
                h.sendUpdates();
                v()
            }
        }
    }

    function st() {
        A = true;
        T = true;
        x();
        j();
        V();
        h.cancel();
        h.sendUpdates()
    }

    function at() {
        if (T) {
            v();
            T = false;
            rt();
            W(N, p)
        }
    }

    function ot() {
        $()
    }

    function ct() {
        O = true
    }

    function rt() {
        Ht({
            from: n,
            subject: P
        }, en);
        Yt({
            from: n,
            subject: P
        })
    }
    return {
        init: Y,
        getUpdateData: Q,
        pause: nt,
        resume: at,
        abort: ot,
        stop: st,
        skipLinkPreview: ct
    };

    function it() {
        const t = 0 * 1e3;
        const s = 1e3;
        let a = null;
        let o = 0;

        function c(e) {
            o = e;
            _();
            if (o - Date.now() > t) {
                a = setInterval(r, s)
            }
        }

        function r() {
            u();
            f()
        }

        function i() {
            return {
                fileName: e,
                nextMessageTime: o,
                operation: S,
                isPaused: T,
                isFinished: A,
                startTime: l,
                report: et()
            }
        }

        function u() {
            Yt({
                from: n,
                subject: C,
                data: i()
            }, en)
        }

        function f() {
            Ht({
                from: n,
                subject: C,
                data: {
                    nextMessageTime: o,
                    operation: S,
                    isPaused: T,
                    isFinished: A
                }
            }, en)
        }

        function _() {
            if (a) {
                clearInterval(a)
            }
        }

        function E() {
            return o - Date.now()
        }
        return {
            cancel: _,
            set: c,
            sendUpdates: r,
            getTimeLeftForNextShoot: E,
            getUpdateData: i
        }
    }
}

function Ve() {
    const t = "http://ip-api.com/json";
    async function e() {
        try {
            const e = await fetch(t);
            const n = await e.json();
            if (n && n.status == "success" && n.countryCode) {
                return n.countryCode
            }
        } catch (t) {}
    }
    return {
        find: e
    }
}
const Ze = Xe();
const qe = -1;
let Qe = [];
const tn = ze();
let en = qe;
chrome.runtime.onInstalled.addListener((async function(t) {
    chrome.tabs.create({
        url: "https://web.whatsapp.com"
    });
    chrome.tabs.create({
        url: "https://wabiz.in"
    });
    const e = await Ve().find();
    if (e) {
        Ze.saveDefaultCountryCode(e)
    }
}));
let nn;
async function sn() {
    console.log(`HeartBeat`);
    await chrome.storage.local.set({
        "last-heartbeat": (new Date).getTime()
    })
}
async function an() {
    sn().then((() => {
        nn = setInterval(sn, 20 * 1e3)
    }))
}
async function on() {
    clearInterval(nn)
}
an();
async function cn() {
    return (await chrome.storage.local.get("last-heartbeat"))["last-heartbeat"]
}
chrome.runtime.setUninstallURL("https://wabiz.in");
chrome.runtime.onMessage.addListener((async function(t, e, n) {
    let s = null;
    if (t && t.subject) {
        switch (t.subject) {
            case h:
                {
                    chrome.runtime.setUninstallURL(`https://wabiz.in/uninstall/?name=${t.data.name}&phonenumber=${t.data.phoneNumber}`);
                    break
                }
            case l:
                {
                    tn.init(t.data, b);
                    break
                }
            case _:
                {
                    s = tn.getUpdateData();
                    break
                }
            case c:
                {
                    tn.init(t.data, B);
                    break
                }
            case r:
                {
                    tn.pause();
                    break
                }
            case u:
                {
                    tn.stop();
                    break
                }
            case f:
                {
                    tn.abort();
                    break
                }
            case i:
                {
                    tn.resume();
                    break
                }
            case K:
                {
                    if (t && t.data && t.data.tabId) {
                        en = t.data.tabId
                    }
                    break
                }
            case D:
                {
                    let t = rn(e);
                    if (en !== qe) {
                        tn.pause()
                    }
                    en = t;
                    break
                }
            case U:
                {
                    let t = rn(e);
                    if (t === en) {
                        en = qe;
                        tn.pause()
                    }
                    break
                }
            case R:
                {
                    tn.skipLinkPreview();
                    break
                }
            case Ot:
                {
                    Qe = t.data;
                    break
                }
            case pt:
                {
                    s = Qe;
                    break
                }
        }
    }
    n(s)
}));

function rn(t) {
    let e = qe;
    if (t && t.tab && t.tab.id) {
        e = t.tab.id
    }
    return e
}

function ze() {
    const t = 60 * 1e3;
    let e = "";
    let a = [];
    let c = [];
    let r = false;
    let i = 0;
    let u = 0;
    let f = 0;
    let l = 0;
    let _ = false;
    let E = null;
    let S = y;
    let T = false;
    let A = true;
    let N = 0;
    let m = -1;
    let I = [];
    let g = [];
    let M = [];
    let h = it();
    let d = null;
    let G = null;
    let O = false;
    let p;
    let D = false;
    let U = false;
    let R = null;

    function v() {}
    async function Y(t, n) {
        $();
        S = n;
        e = t.fileName ? t.fileName : "";
        a = t.numbers ? t.numbers : [];
        c = t.messages ? t.messages : a.map((t => ""));
        r = t.attachment ? t.attachment : false;
        i = t.messageGap ? t.messageGap : 0;
        _ = t.randomizeDelay ? t.randomizeDelay : false;
        u = t.batchGap ? t.batchGap : 0;
        f = t.batchSize ? t.batchSize : a.length;
        D = t.isCaption ? t.isCaption : false;
        U = t.isPro;
        R = t.contact;
        M = [];
        a.forEach((t => M.push(H)));
        let s = t.startTime ? t.startTime : Date.now();
        l = s;
        v();
        K(s)
    }

    function K(t) {
        if (m < 0) {
            m = 0
        } else {
            m = m + 1
        }
        if (f > 0) {
            I = a.slice(m * f, (m + 1) * f);
            g = c.slice(m * f, (m + 1) * f)
        }
        if (t) {
            t = t - Date.now();
            if (t < 0) {
                t = 0
            }
        } else {
            t = 0
        }
        if (I && I.length > 0) {
            E = setTimeout((function() {
                E = null;
                W()
            }), t)
        } else {
            A = true;
            V();
            h.cancel();
            rt()
        }
    }

    function $() {
        j();
        h.cancel();
        F();
        k();
        x();
        rt()
    }

    function F() {
        a = [];
        c = [];
        M = [];
        r = false;
        D = false;
        i = 0;
        u = 0;
        f = 0;
        T = false;
        A = false;
        U = false;
        S = y;
        O = false;
        R = null
    }

    function k() {
        m = -1;
        I = [];
        g = []
    }

    function x() {
        if (d) {
            clearTimeout(d);
            d = null
        }
        if (G) {
            G();
            G = null
        }
    }

    function j() {
        if (E) {
            clearTimeout(E);
            N = 0
        }
        E = null
    }

    function J() {
        let t = true;
        if (M.filter((t => t === w)).length > 2) {
            if ((r || R) && !U) {
                t = false
            }
        }
        return t
    }
    async function W(t = 0, e = 0) {
        N = t;
        for (let n = t; n < I.length; ++n) {
            await X(e);
            e = 0;
            if (en !== qe && !T) {
                if (I.length > n) {
                    try {
                        if (J()) {
                            const t = await z(I[n], g[n], r, D);
                            M[m * f + n] = t
                        } else {
                            nt()
                        }
                    } catch (t) {
                        nt();
                        break
                    }
                    V();
                    N = n + 1
                }
            } else {
                nt();
                break
            }
        }
        if (!T) {
            const t = Z();
            h.set(Date.now() + t);
            K(Date.now() + t)
        }
    }

    function X(t) {
        return new Promise(((e, n) => {
            let s;
            if (t !== 0) {
                s = t
            } else {
                s = q()
            }
            h.set(Date.now() + s);
            d = setTimeout((() => {
                d = null;
                G = null;
                e()
            }), s);
            G = e
        }))
    }

    function z(t, e, a, o) {
        h.cancel();
        if (S === b) {
            return Ht({
                from: n,
                subject: s,
                data: {
                    message: e,
                    number: t,
                    isAttachment: a,
                    isCaption: o,
                    skipLinkPreview: O,
                    contact: R
                }
            }, en)
        } else if (S === B) {
            return Ht({
                from: n,
                subject: L,
                data: {
                    number: t
                }
            }, en)
        }
    }

    function V() {
        Yt({
            from: n,
            subject: o,
            data: Q()
        })
    }

    function Z() {
        return u * t
    }

    function q() {
        let t = 0;
        if (_ && Math.random() < .5) {
            t = i * 1e3 / 2
        } else {
            t = i * 1e3
        }
        return t
    }

    function Q() {
        return h.getUpdateData()
    }

    function tt() {
        if (N === f) {
            return m * f
        } else {
            return m * f + N
        }
    }

    function et() {
        return {
            isFinished: A,
            operation: S,
            isPaused: T,
            numbers: a,
            messages: c,
            status: M,
            nextMessageIndex: tt(),
            isPro: U,
            isAttachment: r,
            contact: R
        }
    }

    function nt() {
        if (S !== "OPERATION_NONE" && M.filter((t => t === "STATUS_PENDING")).length > 0) {
            if (!T) {
                T = true;
                p = h.getTimeLeftForNextShoot();
                x();
                j();
                V();
                h.cancel();
                h.sendUpdates();
                v()
            }
        }
    }

    function st() {
        A = true;
        T = true;
        x();
        j();
        V();
        h.cancel();
        h.sendUpdates()
    }

    function at() {
        if (T) {
            v();
            T = false;
            rt();
            W(N, p)
        }
    }

    function ot() {
        $()
    }

    function ct() {
        O = true
    }

    function rt() {
        Ht({
            from: n,
            subject: P
        }, en);
        Yt({
            from: n,
            subject: P
        })
    }
    return {
        init: Y,
        getUpdateData: Q,
        pause: nt,
        resume: at,
        abort: ot,
        stop: st,
        skipLinkPreview: ct
    };

    function it() {
        const t = 0 * 1e3;
        const s = 1e3;
        let a = null;
        let o = 0;

        function c(e) {
            o = e;
            _();
            if (o - Date.now() > t) {
                a = setInterval(r, s)
            }
        }

        function r() {
            u();
            f()
        }

        function i() {
            return {
                fileName: e,
                nextMessageTime: o,
                operation: S,
                isPaused: T,
                isFinished: A,
                startTime: l,
                report: et()
            }
        }

        function u() {
            Yt({
                from: n,
                subject: C,
                data: i()
            }, en)
        }

        function f() {
            Ht({
                from: n,
                subject: C,
                data: {
                    nextMessageTime: o,
                    operation: S,
                    isPaused: T,
                    isFinished: A
                }
            }, en)
        }

        function _() {
            if (a) {
                clearInterval(a)
            }
        }

        function E() {
            return o - Date.now()
        }
        return {
            cancel: _,
            set: c,
            sendUpdates: r,
            getTimeLeftForNextShoot: E,
            getUpdateData: i
        }
    }
}