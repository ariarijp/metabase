/* eslint "react/prop-types": "warn" */
import React from "react";
import PropTypes from "prop-types";
import S from "metabase/components/Sidebar.css";
import { t } from 'c-3po';
import Breadcrumbs from "metabase/components/Breadcrumbs.jsx";
import SidebarItem from "metabase/components/SidebarItem.jsx"

import cx from 'classnames';
import pure from "recompose/pure";

const FieldSidebar =({
    database,
    table,
    field,
    style,
    className,
    showXray
}) =>
    <div className={cx(S.sidebar, className)} style={style}>
        <ul>
            <div className={S.breadcrumbs}>
                <Breadcrumbs
                    className="py4"
                    crumbs={[[database.name, `/reference/databases/${database.id}`],
                             [table.name,`/reference/databases/${database.id}/tables/${table.id}`],
                             [field.name]]}
                    inSidebar={true}
                    placeholder={t`Data Reference`}
                />
            </div>
            <SidebarItem key={`/reference/databases/${database.id}/tables/${table.id}/fields/${field.id}`}
                         href={`/reference/databases/${database.id}/tables/${table.id}/fields/${field.id}`}
                         icon="document"
                         name={t`Details`} />
             { showXray && (
                 <SidebarItem
                     key={`/xray/field/${field.id}/approximate`}
                     href={`/xray/field/${field.id}/approximate`}
                     icon="beaker"
                     name={t`X-ray this Field`} />
             )}
        </ul>
    </div>

FieldSidebar.propTypes = {
    database:       PropTypes.object,
    table:          PropTypes.object,
    field:          PropTypes.object,
    className:      PropTypes.string,
    style:          PropTypes.object,
    showXray:       PropTypes.bool
};

export default pure(FieldSidebar);
