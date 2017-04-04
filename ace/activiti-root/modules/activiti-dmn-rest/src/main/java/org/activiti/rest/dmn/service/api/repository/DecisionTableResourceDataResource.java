/* Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.activiti.rest.dmn.service.api.repository;

import javax.servlet.http.HttpServletResponse;

import org.activiti.dmn.api.DecisionTable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Yvo Swillens
 */
@RestController
public class DecisionTableResourceDataResource extends BaseDecisionTableResource {

  @RequestMapping(value = "/dmn-repository/decision-tables/{decisionTableId}/resourcedata", method = RequestMethod.GET, produces = "application/json")
  public byte[] getDecisionTableResource(@PathVariable String decisionTableId, HttpServletResponse response) {
    DecisionTable decisionTable = geDecisionTableFromRequest(decisionTableId);
    return getDeploymentResourceData(decisionTable.getDeploymentId(), decisionTable.getResourceName(), response);
  }
}
